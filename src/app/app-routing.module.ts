import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'HomePage', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
 { path: 'CarInsurance', loadChildren: () => import('./car-insurance/car-insurance.module').then(m => m.CarInsuranceModule) },
{path:'',redirectTo:'/HomePage',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
