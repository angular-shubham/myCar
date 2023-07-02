import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/Services/http.service';
import { CarInsuranceService } from '../Services/car-insurance.service';

@Component({
  selector: 'app-select-varient',
  templateUrl: './select-varient.component.html',
  styleUrls: ['./select-varient.component.scss']
})
export class SelectVarientComponent implements OnInit {
  
 selectedModel : string | null = null;
 variantTypes : string [] = [];
 variantList : any;
 insuranceData : any;
 selectedVariant :any;


  constructor(private router : Router,private http:HttpService, private activeRoute : ActivatedRoute, private carInsure : CarInsuranceService) {
    
    this.selectedModel = this.activeRoute.snapshot.paramMap.get('modelName');
  }

  ngOnInit(): void {
   this.getVariantList(); 
  }

  getVariantList(){
    const endPoint = 'variant?'+'modelName='+this.selectedModel;
    this.http.getDataFromServer(endPoint).subscribe((response: any) => {
      if (response && response.length > 0 && response[0].modelList.length > 0 ) {
         const variants : string[]=response[0].modelList.map((el:any)=>el["Fuel Type"])
         this.variantTypes=[...new Set(variants)];
        this.selectedVariant = this.variantTypes[0];  
       this.variantList = response[0].modelList;
       this.insuranceData=this.carInsure.carInsuranceModal;
      }
      
  },

 error => {}
 )
  }

  setVariantType(items : string){
this.selectedVariant = items;
  }

  setVariantName(obj:any){
    this.insuranceData.variantName = obj["Variant Name"];
    
     }

   
}

