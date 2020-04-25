import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickreminderComponent } from './pickreminder.component';

describe('PickreminderComponent', () => {
  let component: PickreminderComponent;
  let fixture: ComponentFixture<PickreminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickreminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickreminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
