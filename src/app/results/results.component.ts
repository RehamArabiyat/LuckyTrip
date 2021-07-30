import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DestinationService } from '../services/destination.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  resultArray: any;
  srcImage = "";
  notFit = false;
  loading = false;
  counter = [1, 2, 3, 4, 5, 6];
  constructor(private activatedRoute: ActivatedRoute,
    private destination: DestinationService,
    private sharedService: SharedService) {
    this.activatedRoute.params.subscribe((params) => {

      this.getResultById(params.destId);


    });



    this.sharedService.destImage.subscribe((res) => {
      if (res != "") {
        this.srcImage = res;
        let img = new Image();
        img.src = this.srcImage;
        let imageWidth = img.naturalWidth;
        if (imageWidth < 1440 || imageWidth > 1440) {
          this.notFit = true;
        }
      }
    });
  }

  ngOnInit(): void {
  }

  getResultById(id: string) {
    this.loading = true;
    this.destination.getDestinationById(id).subscribe(
      (res: any) => {
        this.loading = false;
        this.resultArray = res;
      },
      (error) => {
        this.loading = false;
      }
    );

  }
}
