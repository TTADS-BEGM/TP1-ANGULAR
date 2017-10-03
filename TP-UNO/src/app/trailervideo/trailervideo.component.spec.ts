import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailervideoComponent } from './trailervideo.component';

describe('TrailervideoComponent', () => {
  let component: TrailervideoComponent;
  let fixture: ComponentFixture<TrailervideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailervideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailervideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
