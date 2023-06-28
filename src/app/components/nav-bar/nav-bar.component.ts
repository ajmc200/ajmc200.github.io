import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '180px',
        backgroundColor: '#001427',
      })),
      state('closed', style({
        height: '0%',
        backgroundColor: '#001427'
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
