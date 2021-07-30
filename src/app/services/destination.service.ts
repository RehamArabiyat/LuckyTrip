import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  destinationsUrl = 'https://devapi.luckytrip.co.uk/api/2.0/top_five/destinations';
  destUrl = 'https://devapi.luckytrip.co.uk/api/2.0/top_five/destination';
  constructor(private http: HttpClient) { }

  getDestinationByCityCountry(cityOrCountry: string) {


    return this.http.get(
      this.destinationsUrl + "?search_type=city_or_country&search_value=" + cityOrCountry
    );
  }
  getAllDestination() {

    return this.http.get(
      this.destinationsUrl + "?search_type=city_or_country&?search_type=none"
    );
  }


  getDestinationById(id: string) {

    return this.http.get(
      this.destUrl + "?id=" + id
    );
  }
}
