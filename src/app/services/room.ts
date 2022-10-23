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