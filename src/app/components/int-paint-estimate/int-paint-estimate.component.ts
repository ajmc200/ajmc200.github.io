import { ViewChild, Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination, Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ROOMLAYOUTS } from 'src/app/services/room-layouts'; 

export interface Room {
  customName: string;
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

  roomFeature = this.fb.group({
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

  chipCountMap: any = new Map<string, Set<number>>([
    ["Bedroom",new Set<number>([0])],
    ["Bathroom",new Set<number>([0])],
    ["Kitchen",new Set<number>([0])],
    ["Living Room",new Set<number>([0])]
  ]);
  

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
    console.log(this.roomFeature.controls)
    console.log(this.roomFeature.controls['windowsQuantity'].value)
    console.log(this.conditionPicked)

    this.add();
  }

  add(): void {
    let roomCount = 1;
    let roomCountArray = this.chipCountMap.get(this.roomPicked);
    
    while(roomCountArray.has(roomCount)) roomCount++;

    roomCountArray.add(roomCount);

    this.roomz.push({customName:'', roomCount: roomCount, roomType:this.roomPicked});
  }

  remove(room: Room): void {
    const index = this.roomz.indexOf(room);

    this.chipCountMap.get(room.roomType).delete(room.roomCount);

    if (index >= 0) this.roomz.splice(index, 1);
  }

}
