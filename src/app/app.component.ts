import { Component, OnInit, VERSION } from '@angular/core';
import { Trolley } from '../_models/trolley';
import { TrolleyService } from '../_services/trolley.service';
import { TourService } from '../_services/tour.service';
import { Tour } from '../_models/tour';
import { TrolleyId } from '../_models/trolleyid';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public trolleys: Trolley[] = [];
  public tour: Tour;

  isTourLoading: boolean = true;
  isTrolleysLoading: boolean = true;

  constructor(
    private trolleyService: TrolleyService,
    private tourService: TourService
  ) {}
  ngOnInit(): void {
    this.onGetTrolleys();
    this.onGetTours();
  }

  onGetTrolleys(): void {
    this.trolleyService.getTrolleys().subscribe((trolleyData) => {
      this.trolleys = trolleyData;
      this.isTrolleysLoading = false;
    });
  }

  compareTrolley() {}

  onGetTours(): void {
    this.tourService.getTours().subscribe((tourData) => {
      this.tour = tourData;
      this.isTourLoading = false;
    });
  }

  getTrolley(id: number): Trolley {
    return this.trolleys.find((o) => o.trolleyId === id);
  }

  isTrolleyEmpty(trolleyId: TrolleyId) {
    this.getTrolley(trolleyId.trolleyId);
  }
}
