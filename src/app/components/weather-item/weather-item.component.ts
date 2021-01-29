import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data.model';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherItemComponent implements OnInit {

  @Input() weather: WeatherData;

  constructor() { }

  ngOnInit(): void {
  }

}
