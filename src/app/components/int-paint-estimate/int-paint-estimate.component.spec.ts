import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntPaintEstimateComponent } from './int-paint-estimate.component';

describe('IntPaintEstimateComponent', () => {
  let component: IntPaintEstimateComponent;
  let fixture: ComponentFixture<IntPaintEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntPaintEstimateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntPaintEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
