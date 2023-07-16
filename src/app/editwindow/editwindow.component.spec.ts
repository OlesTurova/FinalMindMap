import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditwindowComponent } from './editwindow.component';

describe('EditwindowComponent', () => {
  let component: EditwindowComponent;
  let fixture: ComponentFixture<EditwindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditwindowComponent]
    });
    fixture = TestBed.createComponent(EditwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
