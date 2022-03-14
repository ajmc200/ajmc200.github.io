import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterContentChecked {
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
