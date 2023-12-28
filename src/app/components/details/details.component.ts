import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../../services/housing.service";
import { HousingLocation } from "../../models/housing-location";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-details",
	standalone: true,
	imports: [MatCardModule, MatButtonModule, MatIconModule],
	templateUrl: "./details.component.html",
	styleUrl: "./details.component.scss",
})
export class DetailsComponent {
	route: ActivatedRoute = inject(ActivatedRoute);
	housingService = inject(HousingService);
	housingLocation: HousingLocation | undefined;

	constructor() {
		const housingLocationId = Number(this.route.snapshot.params["id"]);
		this.housingLocation =
			this.housingService.getHousingLocationById(housingLocationId);
	}
}
