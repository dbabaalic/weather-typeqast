import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data.model';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherListComponent implements OnInit {

  @Input() weatherData: WeatherData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
