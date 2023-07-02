import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/Services/http.service';
import { CarInsuranceService } from '../Services/car-insurance.service';

@Component({
  selector: 'app-select-model',
  templateUrl: './select-model.component.html',
  styleUrls: ['./select-model.component.scss']
})
export class SelectModelComponent implements OnInit {
  
  selectedBrand : string | null = null;
  modelList: any[] = [];
  insuranceData : any;
  
  constructor(private activeRoute : ActivatedRoute, private http : HttpService, private carservice : CarInsuranceService, private router : Router){
    this.selectedBrand = this.activeRoute.snapshot.paramMap.get('brandName');
    this.insuranceData = carservice.carInsuranceModal;
  }

  ngOnInit(): void {
  this.getData();
  }

  getData(){
const endPoint = 'brands?'+'brandName='+this.selectedBrand;
this.http.getDataFromServer(endPoint).subscribe((response:any)=>{
if(response && response.length > 0){
  this.modelList = response[0].models;
  console.log(response);
}
},
error =>{

}
)
  }

  selectModel(model:any){
    this.insuranceData.modelName=model;
    this.router.navigate(['/CarInsurance/variant',model]);
  }
}
