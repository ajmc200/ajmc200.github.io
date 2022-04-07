import { ViewChild, Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination, Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) { }

  counter:number = 0;
  roomTypeToggle = false;
  layoutsToggle = false;

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
  }

  roomLayouts() {
    this.layoutsToggle = true
  }
}
