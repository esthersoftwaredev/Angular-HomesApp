import { Component } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housing-location.component";

import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [HousingLocationComponent, MatInputModule, MatIconModule],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {}
