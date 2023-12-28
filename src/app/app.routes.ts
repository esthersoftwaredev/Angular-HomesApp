import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { DetailsComponent } from "./components/details/details.component";

export const routes: Routes = [
	{ path: "", component: HomeComponent, title: "Home" },
	{ path: "details", component: DetailsComponent, title: "Details" },
];
