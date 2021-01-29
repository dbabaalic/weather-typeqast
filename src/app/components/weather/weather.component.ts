import { Component, OnInit } from '@angular/core';
import { WeatherSearchTerm } from 'src/app/models/search-term.model';
import { WeatherData } from 'src/app/models/weather-data.model';
import { WeatherService } from 'src/app/services/weather.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  weatherData$: Observable<WeatherData[]> = of([]);

  constructor(private weatherService: WeatherService) { }

  onSearch(searchTerm: WeatherSearchTerm) {
    if(searchTerm.city) {
      this.weatherData$ = this.weatherService.getForecast(searchTerm.country, searchTerm.city);
    }
  }

}
