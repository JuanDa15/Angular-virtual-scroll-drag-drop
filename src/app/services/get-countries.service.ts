import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {

  constructor(private _http: HttpClient) { }

  public getCountries(){
    return this._http.get<Country[]>('https://restcountries.com/v3.1/all');
  }
}

