import { ViewChild, Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination, Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ROOMLAYOUTS } from 'src/app/services/room-layouts'; 

@Component({
  selector: 'app-int-paint-estimate',
  templateUrl: './int-paint-estimate.component.html',
  styleUrls: ['./int-paint-estimate.component.css']
})
export class IntPaintEstimateComponent implements OnInit {
  @ViewChild('swiper') swiper?: SwiperComponent;

  public config: SwiperOptions = {
    pagination: { type: 'fraction' }
  }

  roomLayouts = ROOMLAYOUTS;

  roomTypeToggle = false;
  layoutsToggle = false;

  room_types: string[] = ['Bedroom', 'Bathroom', 'Kitchen', 'Living Room'];
  roomPicked!: string;
  sizePicked!: number;
  conditionPicked!: string;

  constructor(private fb: FormBuilder) { }

  toppings = this.fb.group({
    walls: [false],
    ceiling: [false],
    trim: [false],
    windows: [false],
    doors: [false],
  });

  ngOnInit() {
    Swiper.use([Navigation, Pagination])
  }

  //swipe manipulation
  slideNext() {
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper?.swiperRef.slidePrev(100);
  }

  addRoom() {
    this.roomTypeToggle = true;
  }

  dimensions() {
  }

  submit() {
    console.log(this.roomPicked)
    console.log(this.sizePicked)
    console.log(this.toppings.controls)
    console.log(this.conditionPicked)
  }

}
