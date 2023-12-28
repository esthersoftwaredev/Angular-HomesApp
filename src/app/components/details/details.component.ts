import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute)
  housingLocationId = 0;

  ngOnInit(): void {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }

}
