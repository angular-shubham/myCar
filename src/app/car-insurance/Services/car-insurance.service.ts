import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarInsuranceService {

  carInsuranceModal : CarInsurance = {
   "brandName" : '',
   "modelName" : '',
   "variantName" : '',
   "registerData" : {}
  }
  constructor() { }


}
 export class CarInsurance{
  brandName!: string;
  modelName!: string;
  variantName! : string;
  registerData! : {}
 }

