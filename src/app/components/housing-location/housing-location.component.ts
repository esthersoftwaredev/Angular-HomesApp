import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HousingLocation } from '../../models/housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
