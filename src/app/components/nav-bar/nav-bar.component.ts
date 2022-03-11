import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '180px',
        backgroundColor: 'rgb(53, 53, 53)',
      })),
      state('closed', style({
        height: '0%',
        backgroundColor: 'rgb(53, 53, 53)'
      })),
      transition('open => closed', [
        animate('0.15s')
      ]),
      transition('closed => open', [
        animate('0.15s')
      ]),
    ]),
  ],
})
export class NavBarComponent implements OnInit {

  constructor() { }

  isOpen = false;

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
