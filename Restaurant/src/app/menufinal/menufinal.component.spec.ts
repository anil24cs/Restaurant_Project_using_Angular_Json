import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenufinalComponent } from './menufinal.component';

describe('MenufinalComponent', () => {
  let component: MenufinalComponent;
  let fixture: ComponentFixture<MenufinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenufinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenufinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
