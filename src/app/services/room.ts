export interface Room {
  customName: string;
  roomCount: number;
  roomPicked: string;
  length: number;
  width: number;
  height: number;
  conditionPicked: string;
  walls: boolean;
  ceiling: boolean;
  trim: boolean;
  windows: boolean;
  doors: boolean;
  windowsQuantity: number;
  doorsQuantity: number;
}