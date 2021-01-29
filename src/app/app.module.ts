import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { WeatherAverageComponent } from './components/weather-average/weather-average.component';
import { WeatherAveragePipe } from './pipes/weather-average.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherSearchComponent,
    WeatherListComponent,
    WeatherItemComponent,
    WeatherAverageComponent,
    WeatherAveragePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
