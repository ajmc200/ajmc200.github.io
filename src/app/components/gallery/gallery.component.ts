import {
  AfterContentChecked,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit, AfterContentChecked {
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentChecked() {}
}
