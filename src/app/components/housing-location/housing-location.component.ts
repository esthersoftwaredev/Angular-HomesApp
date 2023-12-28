import { Component, Input } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { HousingLocation } from "../../models/housing-location";

import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-housing-location",
	standalone: true,
	imports: [
		RouterLink,
		RouterOutlet,
		MatCardModule,
		MatIconModule,
	],
	templateUrl: "./housing-location.component.html",
	styleUrl: "./housing-location.component.scss",
})
export class HousingLocationComponent {
	@Input() housingLocation!: HousingLocation;
}
