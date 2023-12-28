import { Component, inject } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../../models/housing-location";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { HousingService } from "../../services/housing.service";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [
		HousingLocationComponent,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
	],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	housingLocationList: HousingLocation[] = [];
	housingService: HousingService = inject(HousingService);
	filteredLocationList: HousingLocation[] = [];
  results = true;

	constructor() {
		this.housingService.getAllHousingLocations().subscribe((data) => {
			this.housingLocationList = data;
			this.filteredLocationList = this.housingLocationList;
		});
	}

	filterResults(text: string) {
		if (!text) {
			this.filteredLocationList = this.housingLocationList;
		}

		this.filteredLocationList = this.housingLocationList.filter(
			(housingLocation) =>
				housingLocation.city.toLowerCase().includes(text.toLowerCase())
		);
	}
}
