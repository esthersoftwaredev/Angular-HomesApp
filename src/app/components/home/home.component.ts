import { Component, OnInit, inject } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../../models/housing-location";
import { HousingService } from "../../services/housing.service";
import { FormBuilder, FormGroup, ReactiveFormsModule  } from "@angular/forms";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [
		HousingLocationComponent,
    ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
    MatButtonModule,
    MatTooltipModule,
		MatIconModule,
	],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
	housingLocationList: HousingLocation[] = [];
	housingService: HousingService = inject(HousingService);
	filteredLocationList: HousingLocation[] = [];
  results = true;

  filterForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      filter: [''],
    });
	}

  ngOnInit() {
    this.housingService.getAllHousingLocations().subscribe((data) => {
			this.housingLocationList = data;
			this.filteredLocationList = this.housingLocationList;
		});
  }

	filterResults() {
    const text = this.filterForm.get('filter')?.value;
		if (!text) {
			this.filteredLocationList = this.housingLocationList;
		}

		this.filteredLocationList = this.housingLocationList.filter(
			(housingLocation) =>
				housingLocation.city.toLowerCase().includes(text.toLowerCase())
		);
	}

  clearFilter() {
    this.filteredLocationList = [...this.housingLocationList];
    this.filterForm.get('filter')?.setValue('');
  }
}
