import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  showCar : boolean = false;
  showBike : boolean = false;
  showPlane : boolean = false;

  showCarForm(){
    this.showCar = true;
    this.showBike = false;
    this.showPlane = false;
  }

  showBikeForm(){
    this.showCar = false;
    this.showBike = true;
    this.showPlane = false;
  }

  showPlaneForm(){
    this.showCar = false;
    this.showBike = false;
    this.showPlane = true;
  }
}
