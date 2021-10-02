import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemDetailComponent } from './additem-detail.component';

describe('AdditemDetailComponent', () => {
  let component: AdditemDetailComponent;
  let fixture: ComponentFixture<AdditemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
