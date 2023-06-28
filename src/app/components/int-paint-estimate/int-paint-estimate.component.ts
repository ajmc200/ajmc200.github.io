import { ViewChild, Component, OnInit } from '@angular/core';

import {
  UntypedFormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ROOMLAYOUTS } from 'src/app/services/room-layouts';
import { Room } from '../../services/room';
import { InteriorCalculatorService } from '../../services/calculate/interior-calculator.service';

@Component({
  selector: 'app-int-paint-estimate',
  templateUrl: './int-paint-estimate.component.html',
  styleUrls: ['./int-paint-estimate.component.scss'],
})
export class IntPaintEstimateComponent implements OnInit {
  roomLayouts = ROOMLAYOUTS;

  visible = false;
  layoutsToggle = false;

  editThisRoom: any = null; //holds oldRoom to edit/update

  room_types: string[] = ['Bedroom', 'Bathroom', 'Kitchen', 'Living Room'];
  calculatorService: InteriorCalculatorService =
    new InteriorCalculatorService();
  totalSum: any = null;
  selectedImage!: number[];
  length!: any;

  constructor(private fb: UntypedFormBuilder) {}

  roomDetailsForm = this.fb.group({
    customName: [''],
    roomPicked: [''],
    length: [''],
    width: [''],
    height: [''],
    conditionPicked: [''],

    roomFeaturesForm: this.fb.group({
      walls: [false],
      ceiling: [false],
      trim: [false],
      windows: [false],
      doors: [false],
      windowsQuantity: [],
      doorsQuantity: [],
    }),
  });

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  roomz: Room[] = [];

  chipCountMap: any = new Map<string, Set<number>>([
    ['Bedroom', new Set<number>([0])],
    ['Bathroom', new Set<number>([0])],
    ['Kitchen', new Set<number>([0])],
    ['Living Room', new Set<number>([0])],
  ]);

  ngOnInit() {}

  addRoom() {
    this.visible = true;
    this.layoutsToggle = false;
    this.editThisRoom = null;
  }

  dimensions() {}

  submit() {
    this.add();
    this.visible = false;
    this.layoutsToggle = false;
  }

  add(): void {
    let roomCount = 1;
    let roomCountArray = this.chipCountMap.get(
      this.roomDetailsForm.get('roomPicked')?.value
    );
    while (roomCountArray.has(roomCount)) roomCount++;
    roomCountArray.add(roomCount);

    const customName =
      this.roomDetailsForm.get('customName')?.value == '' ||
      this.roomDetailsForm.get('customName')?.value == null
        ? this.roomDetailsForm.get('roomPicked')?.value + ' ' + roomCount
        : this.roomDetailsForm.get('customName')?.value;

    this.roomz.push({
      customName: customName,
      roomCount: roomCount,
      roomPicked: this.roomDetailsForm.get('roomPicked')?.value,
      length: this.roomDetailsForm.get('length')?.value,
      width: this.roomDetailsForm.get('width')?.value,
      height: this.roomDetailsForm.get('height')?.value,
      conditionPicked: this.roomDetailsForm.get('conditionPicked')?.value,
      walls:
        this.roomDetailsForm.controls['roomFeaturesForm'].get('walls')?.value,
      ceiling:
        this.roomDetailsForm.controls['roomFeaturesForm'].get('ceiling')?.value,
      trim: this.roomDetailsForm.controls['roomFeaturesForm'].get('trim')
        ?.value,
      windows:
        this.roomDetailsForm.controls['roomFeaturesForm'].get('windows')?.value,
      doors:
        this.roomDetailsForm.controls['roomFeaturesForm'].get('doors')?.value,
      windowsQuantity:
        this.roomDetailsForm.controls['roomFeaturesForm'].get('windowsQuantity')
          ?.value,
      doorsQuantity:
        this.roomDetailsForm.controls['roomFeaturesForm'].get('doorsQuantity')
          ?.value,
    });
    console.log(this.roomz);
  }

  remove(room: Room): void {
    let roomTotal = this.calculatorService.calcRoom(room);

    const index = this.roomz.indexOf(room);

    this.chipCountMap.get(room.roomPicked).delete(room.roomCount);

    if (index >= 0) this.roomz.splice(index, 1);

    if (this.roomz.length < 1) {
      this.totalSum = null;
    } else {
      this.totalSum -= roomTotal;
    }
  }

  edit(room: Room): void {
    this.editThisRoom = room;

    this.roomDetailsForm.controls['customName'].setValue(room.customName);
    this.roomDetailsForm.controls['roomPicked'].setValue(room.roomPicked);
    this.roomDetailsForm.controls['length'].setValue(room.length);
    this.roomDetailsForm.controls['width'].setValue(room.width);
    this.roomDetailsForm.controls['height'].setValue(room.height);
    this.roomDetailsForm.controls['conditionPicked'].setValue(
      room.conditionPicked
    );
    this.roomDetailsForm.controls['roomFeaturesForm']
      .get('walls')
      ?.setValue(room.walls);
    this.roomDetailsForm.controls['roomFeaturesForm']
      .get('ceiling')
      ?.setValue(room.ceiling);
    this.roomDetailsForm.controls['roomFeaturesForm']
      .get('trim')
      ?.setValue(room.trim);
    this.roomDetailsForm.controls['roomFeaturesForm']
      .get('windows')
      ?.setValue(room.windows);
    this.roomDetailsForm.controls['roomFeaturesForm']
      .get('doors')
      ?.setValue(room.doors);
    this.roomDetailsForm.controls['roomFeaturesForm']
      .get('windowsQuantity')
      ?.setValue(room.windowsQuantity);
    this.roomDetailsForm.controls['roomFeaturesForm']
      .get('doorsQuantity')
      ?.setValue(room.doorsQuantity);

    this.visible = true;
    this.layoutsToggle = false;
  }

  save() {
    //remove from roomCount Set: in case they changed room type e.x. Bedroom --> Kitchen
    const oldRoom = this.editThisRoom;
    this.chipCountMap.get(oldRoom.roomPicked).delete(oldRoom.roomCount);

    //remove room from roomz: in order to update
    const index = this.roomz.indexOf(oldRoom);
    if (index >= 0) this.roomz.splice(index, 1);

    //"update"
    this.submit();
    this.editThisRoom = null;
  }

  calculate() {
    this.totalSum = this.calculatorService.calculateRoomz(this.roomz);
    //add current room value when form is valid: will also show warning if form is invalid
    //possibly make totalSum dynamic so they alwayse see the running total
    //and turn calculate button into Build Report, with detailed view of costs
  }

  Round(val: number): number {
    return Math.round(val);
  }

  imageSelected(L: number, W: number, H: number): number {
    console.log(this.selectedImage);
    this.roomDetailsForm.controls['length'].setValue(L);
    this.roomDetailsForm.controls['width'].setValue(W);
    this.roomDetailsForm.controls['height'].setValue(H);

    return Math.round(L * W * H);
  }
}
