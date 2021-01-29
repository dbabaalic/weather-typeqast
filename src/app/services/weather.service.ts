import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather-data.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Country } from '../models/countries.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getForecast(country: Country, city: string): Observable<WeatherData[]> {
    return this.http.get<{data: WeatherData[]}>(environment.weatherAPIUrl, { params: {
      key: environment.weatherAPIKey,
      country: country.code,
      city,
      days: '10'
    }}).pipe(map(result => result? result.data : []));
  }
}
