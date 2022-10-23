import { Injectable } from '@angular/core';
import { Room } from '../../services/room'

@Injectable({
  providedIn: 'root'
})
export class InteriorCalculatorService {

  constructor() { }

  calculateRoomz(roomz: Room[]): number {
    let totalSum = 0;
    let room;

    for(let i=0; i<roomz.length; i++) {
      room = roomz[i];
      totalSum += this.calcRoom(room);
    }

    return totalSum;
  }

  calcRoom(room: Room): number {
    let total = 0;
    
    total = room.sizePicked*2.50;

    return total;
  }
}
