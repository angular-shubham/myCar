import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarInsuranceComponent } from './car-insurance.component';
import { SelectBrandComponent } from './select-brand/select-brand.component';
import { SelectModelComponent } from './select-model/select-model.component';
import { SelectVarientComponent } from './select-varient/select-varient.component';
import { RegisterComponent } from './register/register.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';

const routes: Routes = [{ path: '', component: CarInsuranceComponent, 
children : [{path : '', component : SelectBrandComponent},
{path : 'model/:brandName', component : SelectModelComponent},
{path : 'variant/:modelName', component : SelectVarientComponent},
{path : 'regi', component : RegisterComponent},
{path:'plan', component : ChoosePlanComponent},]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarInsuranceRoutingModule { }
