import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";

import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		CommonModule,
		RouterLink,
		RouterLinkActive,
		RouterOutlet,
		HomeComponent,
		MatToolbarModule,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "homes-app";
}
