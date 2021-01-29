import { Pipe, PipeTransform } from '@angular/core';
import { WeatherData } from '../models/weather-data.model';

@Pipe({
  name: 'weatherAverage'
})
export class WeatherAveragePipe implements PipeTransform {
  transform(data: WeatherData[] = []): number {
    const sum = data.reduce((accumulator, weatherData) => accumulator + weatherData.temp, 0);
    return sum / data.length;
  }
}