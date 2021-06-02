import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CountryService} from "../../services/country.service";
import {switchMap} from "rxjs/internal/operators/switchMap";
import {Country} from "../../interfaces/country.interface";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({code}) => this.countryService.country(code) ),
        tap(console.log)
      )
      .subscribe(country=>{
        this.country = country;
      })
  }

}
