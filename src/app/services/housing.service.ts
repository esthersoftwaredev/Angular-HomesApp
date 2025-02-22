import { Injectable, inject } from "@angular/core";
import { HousingLocation } from "../models/housing-location";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class HousingService {
	http: HttpClient = inject(HttpClient);

	// apiURL = "https://monacodelisa-node-express.onrender.com/api/locations";
	// apiURL = "https://monacodelisa-node-express.cyclic.app/api/locations";
	// apiURL = "https://rest-api.monacodelisa.dev/api/locations";
	// apiURL = "https://dummy-data.ewbeserver.de/api/locations";
	apiURL = "https://my-api.esthersoftware.dev/api/locations";

	protected housingLocationList: HousingLocation[] = [];

	constructor() {
    this.getAllHousingLocations().subscribe((data: HousingLocation[]) => {
      this.housingLocationList = data;
    });
  }

	getAllHousingLocations(): Observable<HousingLocation[]> {
		return this.http.get<HousingLocation[]>(this.apiURL);
	}

	getHousingLocationById(id: Number): HousingLocation | undefined {
		return this.housingLocationList.find(
			(housingLocation) => housingLocation.id === id
		);
	}

	submitApplication(firstName: string, lastName: string, email: string) {
		console.log(firstName, lastName, email);
	}
}
