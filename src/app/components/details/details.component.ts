import { Component, inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  housingLocationId = 0;
  housingService = inject(HousingService);

  constructor () {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }

}
