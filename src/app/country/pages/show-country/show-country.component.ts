import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CountryService} from "../../services/country.service";
import {switchMap} from "rxjs/internal/operators/switchMap";

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({code}) => this.countryService.country(code) )
      )
      .subscribe(country=>{
        console.log(country);
      })
  }

}
