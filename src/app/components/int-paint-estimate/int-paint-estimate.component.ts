import { AfterContentChecked, ViewChild, Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination, Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-int-paint-estimate',
  templateUrl: './int-paint-estimate.component.html',
  styleUrls: ['./int-paint-estimate.component.css']
})
export class IntPaintEstimateComponent implements OnInit, AfterContentChecked {
  @ViewChild('swiper')swiper!: SwiperComponent;

  public config: SwiperOptions = {
    pagination: true,
    navigation: true
  }
  counter:number = 0;

  constructor() { }

  selectedItems: number = 0;

  checkedState(event:any, checked:any) {
    if(event.target.checked === true){
      if(this.counter < 1){
        this.counter++
      } else {
        event.target.checked = false;
      }
    }
    else if(this.counter>0){
      this.counter--;
    }
  }

  ngOnInit(): void {
    Swiper.use([Navigation, Pagination])
  }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

}
