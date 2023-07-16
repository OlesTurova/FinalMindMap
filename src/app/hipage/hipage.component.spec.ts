import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipageComponent } from './hipage.component';

describe('HipageComponent', () => {
  let component: HipageComponent;
  let fixture: ComponentFixture<HipageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HipageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
