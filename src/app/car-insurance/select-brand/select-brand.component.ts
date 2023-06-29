import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarInsurance, CarInsuranceService } from '../Services/car-insurance.service';

@Component({
  selector: 'app-select-brand',
  templateUrl: './select-brand.component.html',
  styleUrls: ['./select-brand.component.scss']
})
export class SelectBrandComponent {
brandList : any = [
  {
    "imgPath" : "http://www.carlogos.org/logo/Tata-Group-logo-3840x2160.png",
    "brandName" : "TATA",
  },
  {
    "imgPath" : "http://www.carlogos.org/logo/Kia-logo-2560x1440.png",
    "brandName" : "KIA",
  },
  {
    "imgPath" : "https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/automotive-companies/maruti-suzuki-logo.png",
    "brandName" : "MARUTI",
  },
  {
    "imgPath" : "https://logos-world.net/wp-content/uploads/2021/03/Audi-Symbol.png",
    "brandName" : "AUDI",
  }
]

insuranceData! : CarInsurance;

constructor(private car : CarInsuranceService, private router: Router){

  this.insuranceData = this.car.getCarInsuranceModal()
}

selectBrand(name:string){
this.insuranceData.brandName = name;
this.router.navigate(['/CarInsurance/model',name]);
}

}
