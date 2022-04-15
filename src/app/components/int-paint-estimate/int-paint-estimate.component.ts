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

  counter:number = 0;
  roomTypeToggle = false;
  layoutsToggle = false;

  roomPicked!: string;
  //roomObject: any[] = [{0: 'Bedroom'}, {1: 'Bathroom'}, {2: 'Kitchen'}, {3: 'Living Room'}]
  room_types: string[] = ['Bedroom', 'Bathroom', 'Kitchen', 'Living Room'];

  //new approach: build out all the possible swiper components but hide them, and display the appropriate one based on what is selected

  constructor(private fb: FormBuilder) { 
    
  }
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

  //Checkbox Limiter
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

  //swipe manipulation
  slideNext() {
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper?.swiperRef.slidePrev(100);
  }

  addRoom() {
    this.roomTypeToggle = true;

    console.log()
  }

}
