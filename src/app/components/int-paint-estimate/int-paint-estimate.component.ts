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

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = false;

  toppings!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 
    this.toppings = _formBuilder.group({
      walls: false,
      ceiling: false,
      trim: false,
      windows: false,
      doors: false,
    });
  }

  roomLayouts = ROOMLAYOUTS;
  selectedRoomType = 0;
  counter:number = 0;
  roomTypeToggle = false;
  layoutsToggle = false;

  roomPicked!: string;
  room_types: string[] = ['Bedroom', 'Bathroom', 'Kitchen', 'Living Room'];

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

  ngOnInit() {
    Swiper.use([Navigation, Pagination])

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  //swipe manipulation
  slideNext() {
    this.swiper?.swiperRef.slideNext(100)
  }
  slidePrev() {
    this.swiper?.swiperRef.slidePrev(100);
  }

  addRoom() {
    this.roomTypeToggle = true
    console.log(this.roomLayouts[0].pictures[0].picture)
  }

}
