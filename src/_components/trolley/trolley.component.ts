import { Component, Input, OnInit } from '@angular/core';
import { ProdLabel } from '../../_models/prodLabel';
import { Trolley } from '../../_models/trolley';

@Component({
  selector: 'app-trolley',
  templateUrl: './trolley.component.html',
  styleUrls: ['./trolley.component.css'],
})
export class TrolleyComponent implements OnInit {
  @Input() trolley: Trolley;

  constructor() {}
  ngOnInit() {}

  getTrolleyState(prodLabel: ProdLabel) {
    if (prodLabel.trolley === null) {
      return 'cube-gray';
    }
    if (this.trolley.trolleyId === prodLabel.trolley?.trolleyId) {
      return 'cube-orange';
    }
    if (this.trolley.trolleyId !== prodLabel.trolley?.trolleyId) {
      return 'cube-blue';
    }
  }

  getTrolleySum(): number {
    let sum = 0;
    this.trolley.prodLabels.forEach((element) => {
      if (element.trolley) {
        sum += element.ntraySize;
      }
    });
    return sum;
  }

  isSumComplete(): boolean {
    return this.getTrolleySum() === this.trolley.nbatchSeqSize ? true : false;
  }
}
