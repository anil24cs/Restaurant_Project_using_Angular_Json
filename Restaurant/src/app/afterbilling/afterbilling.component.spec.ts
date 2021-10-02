import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterbillingComponent } from './afterbilling.component';

describe('AfterbillingComponent', () => {
  let component: AfterbillingComponent;
  let fixture: ComponentFixture<AfterbillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterbillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
