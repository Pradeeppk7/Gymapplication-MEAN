import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqComponent } from './marq.component';

describe('MarqComponent', () => {
  let component: MarqComponent;
  let fixture: ComponentFixture<MarqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
