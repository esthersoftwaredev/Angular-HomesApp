import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../../services/housing.service";
import { HousingLocation } from "../../models/housing-location";
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-details",
	standalone: true,
	imports: [
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
	],
	templateUrl: "./details.component.html",
	styleUrl: "./details.component.scss",
})
export class DetailsComponent implements OnInit {
	route: ActivatedRoute = inject(ActivatedRoute);
	housingService = inject(HousingService);
	housingLocation: HousingLocation | undefined;
  buttonValue: string = 'Apply Now';

	applyForm = new FormGroup({
		firstName: new FormControl(""),
		lastName: new FormControl(""),
		email: new FormControl(""),
	});

	constructor(private formBuilder: FormBuilder) {
		const housingLocationId = Number(this.route.snapshot.params["id"]);
		this.housingLocation =
			this.housingService.getHousingLocationById(housingLocationId);
	}

  ngOnInit(): void {
    this.applyForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      }
    );
  }

  get form(): { [key: string]: AbstractControl } {
    return this.applyForm.controls;
  }

  onSubmitApplication() {
    if (this.form['invalid']) {
      return;
    }

    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
    this.buttonValue = "Application sent"
    setTimeout(() => {
      this.buttonValue = "Apply Now";
    }, 2000);
  }
}
