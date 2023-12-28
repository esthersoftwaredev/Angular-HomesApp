import { Injectable, inject } from "@angular/core";
import { HousingLocation } from "../models/housing-location";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class HousingService {
	http: HttpClient = inject(HttpClient);

	apiURL = "https://monacodelisa-node-express.onrender.com/api/locations";

	protected housingLocationsList: HousingLocation[] = [];

	constructor() {}

	getAllHousingLocations() {
		return this.http.get<HousingLocation[]>(this.apiURL);
	}

	getHousingLocationById(id: Number): HousingLocation | undefined {
		return this.housingLocationsList.find(
			(housingLocation) => housingLocation.id === id
		);
	}

	submitApplication(firstName: string, lastName: string, email: string) {
		console.log(firstName, lastName, email);
	}
}
