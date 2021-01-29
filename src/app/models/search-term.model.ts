import { Country } from './countries.model';

export class WeatherSearchTerm {
  country: Country;
  city: string;

  constructor(country: Country, city: string) {
    this.country = country;
    this.city = city;
  }
}