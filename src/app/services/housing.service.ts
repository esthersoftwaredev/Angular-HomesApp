import { Injectable } from "@angular/core";
import { HousingLocation } from "../models/housing-location";

@Injectable({
	providedIn: "root",
})
export class HousingService {
	protected housingLocationsList: HousingLocation[] = [
		{
			id: 1,
			name: "Acme Fresh Start Housing",
			city: "Chicago",
			state: "IL",
			photo:
				"https://angular.dev/assets/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
			availableUnits: 4,
			wifi: true,
			laundry: true,
		},
		{
			id: 2,
			name: "A113 Transitional Housing",
			city: "Santa Monica",
			state: "CA",
			photo:
				"https://angular.dev/assets/tutorials/common/brandon-griggs-wR11KBaB86U-unsplash.jpg",
			availableUnits: 0,
			wifi: false,
			laundry: true,
		},
		{
			id: 3,
			name: "Warm Beds Housing Support",
			city: "Juneau",
			state: "AK",
			photo:
				"https://angular.dev/assets/tutorials/common/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
			availableUnits: 1,
			wifi: false,
			laundry: false,
		},
		{
			id: 4,
			name: "Homesteady Housing",
			city: "Chicago",
			state: "IL",
			photo:
				"https://angular.dev/assets/tutorials/common/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
			availableUnits: 1,
			wifi: true,
			laundry: false,
		},
		{
			id: 5,
			name: "Happy Homes Group",
			city: "Gary",
			state: "IN",
			photo:
				"https://angular.dev/assets/tutorials/common/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
			availableUnits: 1,
			wifi: true,
			laundry: false,
		},
		{
			id: 6,
			name: "Hopeful Apartment Group",
			city: "Oakland",
			state: "CA",
			photo:
				"https://angular.dev/assets/tutorials/common/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
			availableUnits: 2,
			wifi: true,
			laundry: true,
		},
		{
			id: 7,
			name: "Seriously Safe Towns",
			city: "Oakland",
			state: "CA",
			photo:
				"https://angular.dev/assets/tutorials/common/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
			availableUnits: 5,
			wifi: true,
			laundry: true,
		},
		{
			id: 8,
			name: "Hopeful Housing Solutions",
			city: "Oakland",
			state: "CA",
			photo:
				"https://angular.dev/assets/tutorials/common/r-architecture-GGupkreKwxA-unsplash.jpg",
			availableUnits: 2,
			wifi: true,
			laundry: true,
		},
		{
			id: 9,
			name: "Seriously Safe Towns",
			city: "Oakland",
			state: "CA",
			photo:
				"https://angular.dev/assets/tutorials/common/saru-robert-9rP3mxf8qWI-unsplash.jpg",
			availableUnits: 10,
			wifi: false,
			laundry: false,
		},
		{
			id: 10,
			name: "Capital Safe Towns",
			city: "Portland",
			state: "OR",
			photo:
				"https://angular.dev/assets/tutorials/common/webaliser-_TPTXZd9mOo-unsplash.jpg",
			availableUnits: 6,
			wifi: true,
			laundry: true,
		},
	];

	constructor() {}

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationsList;
  }

  getHousingLocationById(id: Number): HousingLocation | undefined {
    return this.housingLocationsList.find(housingLocation =>
      housingLocation.id === id);
  }
}

