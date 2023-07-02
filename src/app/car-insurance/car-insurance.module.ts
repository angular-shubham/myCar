import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarInsuranceRoutingModule } from './car-insurance-routing.module';
import { CarInsuranceComponent } from './car-insurance.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { SelectBrandComponent } from './select-brand/select-brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModelComponent } from './select-model/select-model.component';
import { SelectVarientComponent } from './select-varient/select-varient.component';
import { SharedModule } from "../shared/shared.module";
import { RegisterComponent } from './register/register.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';





@NgModule({
    declarations: [
        CarInsuranceComponent,
        InsuranceDetailsComponent,
        SelectBrandComponent,
        SelectModelComponent,
        SelectVarientComponent,
        RegisterComponent,
        ChoosePlanComponent,
    ],
    imports: [
        CommonModule,
        CarInsuranceRoutingModule,
        FormsModule, ReactiveFormsModule,
        SharedModule,
    ]
})
export class CarInsuranceModule { }
