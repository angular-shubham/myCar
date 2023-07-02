import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarInsuranceService } from '../Services/car-insurance.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

regiForm! : FormGroup;
insuranceData: any;

constructor(private router : Router, private CarInsure : CarInsuranceService){
  this.insuranceData = this.CarInsure.carInsuranceModal;
  this.createForm();
}

createForm(){
  this.regiForm = new FormGroup ({
    "year":new FormControl('',[Validators.required]),
    "month":new FormControl('',[Validators.required]),
    "city":new FormControl('',[Validators.required]),
    "Odate":new FormControl('',[Validators.required]),
    "Tdate":new FormControl('',[Validators.required]),
  
})
}


years : string [] = ["2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013"];
months : string [] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
cities : string [] = ["Mumbai","Pune","Banglore","Jaipur","Chennai","Kolkata","Delhi","Chandigarh","Lakhnaow","Goa"]

save(){
  console.log("Data is", this.regiForm.value);
  this.router.navigate(['/CarInsurance/plan']);
  this.insuranceData.registerData = this.regiForm.value;
}

}




