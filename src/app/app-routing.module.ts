import { CarForDashboardComponent } from './components/car-for-dashboard/car-for-dashboard.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CarComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'brands', component: BrandComponent},
    {path: 'colors', component: ColorComponent},
    {path: 'cars', component: CarForDashboardComponent},  
    {path: 'brand-add', component: BrandAddComponent},
    {path: 'color-add', component: ColorAddComponent},
    {path: 'rental-add', component: RentalAddComponent},  
  ]},

  // {path: 'brand-add', component: BrandAddComponent},
  // {path: 'color-add', component: ColorAddComponent},
  // {path: 'rental-add', component: RentalAddComponent},
  {path: 'car/:id', component: CarDetailComponent},
  {path: 'rental-add/:id', component: RentalAddComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
