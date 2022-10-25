import { Injectable } from '@angular/core';
import { Room } from '../../services/room'

@Injectable({
  providedIn: 'root'
})
export class InteriorCalculatorService {

  constructor() { }

  calculateRoomz(roomz: Room[]): number {
    let totalSum:any = 0;
    let room;

    for(let i=0; i<roomz.length; i++) {
      room = roomz[i];
      totalSum += this.calcRoom(room);
    }

    return totalSum.toFixed(2);
  }

  calcRoom(room: Room): number {
    let wallSurfaceArea = Math.sqrt(room.sizePicked)*4*10;

    let _painters = (Math.ceil(room.sizePicked/200)>3) ? 4 : Math.ceil(room.sizePicked/200); //1 painter/(200ft^2)
    let _painterWage = 20;
    let hours = (room.sizePicked/_painters)*0.02; // size/painters * 0.02 = 4hr...

    let laborCosts = _painters * (_painterWage * hours); // painters * (painterWage * hours)

    let _costPerWindow = (room.windowsQuantity) ? 20*room.windowsQuantity : 0;
    let _costPerDoor = (room.doorsQuantity || room.doorsQuantity>0) ? 30*room.doorsQuantity : 0;
    let _costPerRepair = 0;// 5-20
    let paintAmount = 0;
      paintAmount += wallSurfaceArea*(1/400); //400 ft^2/gal
      paintAmount += (0.05)*room.windowsQuantity; //.05*1gal
      paintAmount += (0.1)*room.doorsQuantity; 
    //+ (.1gal/ft^2)*(moulding==size) 
    //+ ''ceiling''  
    let paintCost = paintAmount*30; // amount * (30$/gal)  dependent on brand+finish+type(oil, stain...)

    let materialCosts = paintCost + _costPerWindow + _costPerDoor + _costPerRepair; // 

    let taxes;
    let marketing;
    let insurance;
    let salery;

    let overHeadCosts = .1 * (laborCosts+materialCosts); //
    
    /*********************************************************/

    let total = laborCosts + materialCosts + overHeadCosts;

    return total;
  }
}
