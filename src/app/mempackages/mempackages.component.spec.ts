import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MempackagesComponent } from './mempackages.component';

describe('MempackagesComponent', () => {
  let component: MempackagesComponent;
  let fixture: ComponentFixture<MempackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MempackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MempackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
