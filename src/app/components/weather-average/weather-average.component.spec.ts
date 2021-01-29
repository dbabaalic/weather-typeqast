import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAverageComponent } from './weather-average.component';

describe('WeatherAverageComponent', () => {
  let component: WeatherAverageComponent;
  let fixture: ComponentFixture<WeatherAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
