import { ViewChild, Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination, Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ROOMLAYOUTS } from 'src/app/services/room-layouts'; 

export interface Room {
  roomCount: number;
  roomType: string;
}

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

  visible = false;
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
    windowsQuantity: [],
    doorsQuantity: [],
  });

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  roomz: Room[] = [];
  currentroomCount: number[] = [1,1,1,1];

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
    this.visible = true;
  }

  dimensions() {
  }

  submit() {
    console.log(this.roomPicked)
    console.log(this.sizePicked)
    console.log(this.toppings.controls)
    console.log(this.conditionPicked)
    console.log(this.toppings.controls['windowsQuantity'].value)

    this.add();
  }

  add(): void {
    switch (this.roomPicked) {
      case "Bedroom" :{
        this.roomz.push({roomCount: this.currentroomCount[0], roomType:this.roomPicked});
        this.currentroomCount[0]++
        break;
      }
      case "Bathroom" :{
        this.roomz.push({roomCount: this.currentroomCount[1], roomType:this.roomPicked});
        this.currentroomCount[1]++
        break;
      }
      case "Kitchen" :{
        this.roomz.push({roomCount: this.currentroomCount[2], roomType:this.roomPicked});
        this.currentroomCount[2]++
        break;
      }
      case "Living Room" :{
        this.roomz.push({roomCount: this.currentroomCount[3], roomType:this.roomPicked});
        this.currentroomCount[3]++
        break;
      }
    }
  }

  remove(room: Room): void {
    const index = this.roomz.indexOf(room);

    if (index >= 0) {
      this.roomz.splice(index, 1);
    }
  }

}
