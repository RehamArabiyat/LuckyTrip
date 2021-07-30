import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public destImage = new BehaviorSubject<any>("");
  constructor() { }
  setDestImage(imgSrc: string) {

    this.destImage.next(imgSrc);

  }
}
