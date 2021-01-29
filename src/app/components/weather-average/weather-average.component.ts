import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data.model';

@Component({
  selector: 'app-weather-average',
  templateUrl: './weather-average.component.html',
  styleUrls: ['./weather-average.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherAverageComponent implements OnInit {

  @Input() weatherData: WeatherData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
