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
  roomPicked: string;
  sizePicked: number;
  conditionPicked: string;
  walls: boolean;
  ceiling: boolean;
  trim: boolean;
  windows: boolean;
  doors: boolean;
  windowsQuantity: number;
  doorsQuantity: number;
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

  constructor(private fb: FormBuilder) { }

  roomDetailsForm = this.fb.group({
    roomPicked: [''],
    sizePicked: [''],
    conditionPicked: [''],

    roomFeaturesForm: this.fb.group({
      walls: [false],
      ceiling: [false],
      trim: [false],
      windows: [false],
      doors: [false],
      windowsQuantity: [],
      doorsQuantity: [],
    })
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
    this.add();
    this.visible = false;
  }

  add(): void {
    let roomCount = 1;
    const roomPicked = this.roomDetailsForm.get('roomPicked')?.value;
    let roomCountArray = this.chipCountMap.get(roomPicked);
    
    while(roomCountArray.has(roomCount)) roomCount++;

    roomCountArray.add(roomCount);

    this.roomz.push({
      customName     : roomPicked+' '+roomCount, 
      roomCount      : roomCount, 
      roomPicked     : roomPicked, 
      sizePicked     : this.roomDetailsForm.get('sizePicked')?.value,
      conditionPicked: this.roomDetailsForm.get('conditionPicked')?.value,
      walls          : this.roomDetailsForm.controls['roomFeaturesForm'].get('walls')?.value,
      ceiling        : this.roomDetailsForm.controls['roomFeaturesForm'].get('ceiling')?.value,
      trim           : this.roomDetailsForm.controls['roomFeaturesForm'].get('trim')?.value,
      windows        : this.roomDetailsForm.controls['roomFeaturesForm'].get('windows')?.value,
      doors          : this.roomDetailsForm.controls['roomFeaturesForm'].get('doors')?.value,
      windowsQuantity: this.roomDetailsForm.controls['roomFeaturesForm'].get('windowsQuantity')?.value,
      doorsQuantity  : this.roomDetailsForm.controls['roomFeaturesForm'].get('doorsQuantity')?.value,
    });
  }

  remove(room: Room): void {
    const index = this.roomz.indexOf(room);

    this.chipCountMap.get(room.roomPicked).delete(room.roomCount);

    if (index >= 0) this.roomz.splice(index, 1);
  }

  edit(room: Room): void {
    console.log(room)
  }

  resetForm() {
    this.roomDetailsForm.controls['roomPicked'].setValue('');
    this.roomDetailsForm.controls['sizePicked'].setValue('');
    this.roomDetailsForm.controls['conditionPicked'].setValue('');
    this.roomDetailsForm.controls['roomFeaturesForm'].get('walls')?.setValue(false);
    this.roomDetailsForm.controls['roomFeaturesForm'].get('ceiling')?.setValue(false);
    this.roomDetailsForm.controls['roomFeaturesForm'].get('trim')?.setValue(false);
    this.roomDetailsForm.controls['roomFeaturesForm'].get('windows')?.setValue(false);
    this.roomDetailsForm.controls['roomFeaturesForm'].get('doors')?.setValue(false);
    this.roomDetailsForm.controls['roomFeaturesForm'].get('windowsQuantity')?.setValue([]);
    this.roomDetailsForm.controls['roomFeaturesForm'].get('doorsQuantity')?.setValue([]);
  }

}
