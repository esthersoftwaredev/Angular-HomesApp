import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../../services/housing.service";
import { HousingLocation } from "../../models/housing-location";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

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
export class DetailsComponent {
	route: ActivatedRoute = inject(ActivatedRoute);
	housingService = inject(HousingService);
	housingLocation: HousingLocation | undefined;
  buttonValue: string = 'Apply Now';

	applyForm = new FormGroup({
		firstName: new FormControl(""),
		lastName: new FormControl(""),
		email: new FormControl(""),
	});

	constructor() {
		const housingLocationId = Number(this.route.snapshot.params["id"]);
		this.housingLocation =
			this.housingService.getHousingLocationById(housingLocationId);
	}

  onSubmitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
    this.buttonValue = "Application sent"
    setTimeout(() => {
      this.buttonValue = "Apply Now";
    }, 2000);
    this.applyForm.reset();
  }
}
