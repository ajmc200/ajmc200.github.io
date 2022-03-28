import { AfterContentChecked, ViewChild, Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-int-paint-estimate',
  templateUrl: './int-paint-estimate.component.html',
  styleUrls: ['./int-paint-estimate.component.css']
})
export class IntPaintEstimateComponent implements OnInit, AfterContentChecked {
  @ViewChild('swiper')swiper!: SwiperComponent;

  public config: SwiperOptions = {
    pagination: true
  }

  constructor() { }

  ngOnInit(): void {
    Swiper.use([Pagination])
  }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

}
