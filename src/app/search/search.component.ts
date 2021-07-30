import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../services/destination.service';
import { Router, NavigationStart } from "@angular/router";
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  destinationArray = [];
  hideImage = false;
  loading = false;

  constructor(private destination: DestinationService,
    private sharedService: SharedService,
    private route: Router) { }

  ngOnInit(): void {
    this.getAllDestination();

  }

  getAllDestination() {
    this.loading = true;
    this.destination.getAllDestination().subscribe(
      (res: any) => {
        this.loading = false;
        this.destinationArray = res.destinations;
      },
      (error) => {
        this.loading = false;
      }
    );


  }
  updateDestination(dest: string) {
    this.loading = true;
    this.destination.getDestinationByCityCountry(dest).subscribe(
      (res: any) => {
        this.loading = false;
        this.destinationArray = res.destinations;
      },
      (error) => {
        this.loading = false;

      }
    );
  }

  setHideImage(hide: any) {
    hide.srcElement.parentNode.parentNode.style.display = 'none';

  }

  navigateTodestenation(id: string, imgSrc: string) {
    this.sharedService.setDestImage(imgSrc);
    this.route.navigateByUrl("destination/" + id);

  }
}
