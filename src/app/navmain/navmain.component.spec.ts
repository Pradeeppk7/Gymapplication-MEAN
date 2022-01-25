import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmainComponent } from './navmain.component';

describe('NavmainComponent', () => {
  let component: NavmainComponent;
  let fixture: ComponentFixture<NavmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
