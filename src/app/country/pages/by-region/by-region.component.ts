import { Component } from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activatedRegion: string = "";
  countries: Country[] = [];

  constructor(private countryService: CountryService) {
  }

  activeRegion(region: string){
    if(this.activatedRegion===region){return;}
    this.activatedRegion = region;
    this.countries = [];
    this.countryService.byRegion(region).subscribe(countries=>{
      this.countries = countries;
    });
  }
}
