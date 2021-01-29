import { Component, OnDestroy } from '@angular/core';
import { WeatherSearchTerm } from 'src/app/models/search-term.model';
import { WeatherData } from 'src/app/models/weather-data.model';
import { WeatherService } from 'src/app/services/weather.service';
import { Observable, of, Subscription } from 'rxjs';
import { colorPatterns } from 'src/app/models/temperature-gradient-range.model';
import { WeatherAveragePipe } from 'src/app/pipes/weather-average.pipe';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherAveragePipe]
})
export class WeatherComponent implements OnDestroy {

  linearGradient: string;
  weatherData$: Observable<WeatherData[]> = of([]);
  weatherSubscription: Subscription;

  constructor(
    private weatherService: WeatherService,
    private weatherAveragePipe: WeatherAveragePipe
  ) { }

  onSearch(searchTerm: WeatherSearchTerm) {
    if (searchTerm.city) {
      this.weatherData$ = this.weatherService.getForecast(searchTerm.country, searchTerm.city);
      this.weatherSubscription = this.weatherData$.subscribe(
        (weatherData) => this.setLinearGradientStyle(weatherData)
      )
    }
  }

  setLinearGradientStyle(weatherData: WeatherData[]) {
    const average = this.weatherAveragePipe.transform(weatherData);
    const colorPattern = colorPatterns.find(colorPattern => average >= colorPattern.temperatureRange.minTemperature && average <= colorPattern.temperatureRange.maxTemperature);
    if(colorPattern) {
      this.linearGradient = `linear-gradient(130deg, ${colorPattern.color.min}, ${colorPattern.color.average}, ${colorPattern.color.max})`
    }
  }

  ngOnDestroy(): void {
    if (this.weatherSubscription) {
      this.weatherSubscription.unsubscribe();
    }
  }

}
