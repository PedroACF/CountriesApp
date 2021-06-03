import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.eu/rest/v2';

  get httpParams(){
    return new HttpParams()
      .set("fields", "name;capital;flag;population;alpha2Code");
  }

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  searchByCapital(term: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  country(code: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country>(url);
  }

  byRegion(region: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
