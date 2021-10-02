import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemAddComponent } from './additem-add.component';

describe('AdditemAddComponent', () => {
  let component: AdditemAddComponent;
  let fixture: ComponentFixture<AdditemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditemAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
