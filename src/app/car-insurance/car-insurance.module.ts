import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarInsuranceRoutingModule } from './car-insurance-routing.module';
import { CarInsuranceComponent } from './car-insurance.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { SelectBrandComponent } from './select-brand/select-brand.component';
import { FormsModule } from '@angular/forms';
import { SelectModelComponent } from './select-model/select-model.component';
import { SelectVarientComponent } from './select-varient/select-varient.component';


@NgModule({
  declarations: [
    CarInsuranceComponent,
    InsuranceDetailsComponent,
    SelectBrandComponent,
    SelectModelComponent,
    SelectVarientComponent,
    
  ],
  imports: [
    CommonModule,
    CarInsuranceRoutingModule,
    FormsModule
  ]
})
export class CarInsuranceModule { }
