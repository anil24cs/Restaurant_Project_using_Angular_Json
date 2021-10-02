import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenufinalDetailComponent } from './menufinal-detail.component';

describe('MenufinalDetailComponent', () => {
  let component: MenufinalDetailComponent;
  let fixture: ComponentFixture<MenufinalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenufinalDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenufinalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
