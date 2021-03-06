import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherSearchTerm } from 'src/app/models/search-term.model';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged} from 'rxjs/operators'
import { FormBuilder, FormGroup } from '@angular/forms';
import { countries, Country } from 'src/app/models/countries.model';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'] 
})
export class WeatherSearchComponent {

  countries = countries;
  searchForm: FormGroup; 
  cityChanged: Subject<string> = new Subject<string>();

  @Output() search = new EventEmitter<WeatherSearchTerm>();

  constructor(private fb: FormBuilder) {
    this.searchForm = this.createSearchForm();
    this.cityChanged.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(city => {
      this.search.emit( new WeatherSearchTerm(this.country.value, city));
    });
  }

  onCityChange(city: string) {
    this.cityChanged.next(city);
  }

  onCountryChange(country: Country) {
    this.search.emit( new WeatherSearchTerm(country, this.city.value));
  }

  get city() {
    return this.searchForm.get('city');
  }

  get country() {
    return this.searchForm.get('country');
  }

  private createSearchForm(): FormGroup {
    return this.fb.group({
      country: [countries[0]],
      city: ['']
    });
  }

}


