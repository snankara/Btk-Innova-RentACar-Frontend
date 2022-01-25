import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {TabViewModule} from 'primeng/tabview';
import {RippleModule} from 'primeng/ripple';
import {PasswordModule} from 'primeng/password'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import {CardModule} from 'primeng/card';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ToastrModule } from 'ngx-toastr';
import { ColorAddComponent } from './components/color-add/color-add.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import {MenubarModule} from 'primeng/menubar';
import { NavComponent } from './components/shared/nav/nav.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {PanelMenuModule} from 'primeng/panelmenu';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {BadgeModule} from 'primeng/badge';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorDeleteComponent } from './components/color-delete/color-delete.component';
import { CarForDashboardComponent } from './components/car-for-dashboard/car-for-dashboard.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';
import {TimelineModule} from 'primeng/timeline';
import {StepsModule} from 'primeng/steps';
import { RentStepComponent } from './components/rent-step/rent-step.component';
import { TagModule } from 'primeng/tag';
import { AdditionalComponent } from './components/additional/additional.component';
import {PickListModule} from 'primeng/picklist';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarDetailComponent,
    BrandAddComponent,
    ColorAddComponent,
    NavComponent,
    RentalAddComponent,
    DashboardComponent,
    BrandUpdateComponent,
    BrandDeleteComponent,
    ColorUpdateComponent,
    ColorDeleteComponent,
    CarForDashboardComponent,
    CarAddComponent,
    CarUpdateComponent,
    CarDeleteComponent,
    RentStepComponent,
    AdditionalComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataViewModule,
    TagModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    PickListModule,
    PanelModule,
    DropdownModule,
    StepsModule,
    DialogModule,
    BadgeModule,
    InputTextModule,
    InputTextareaModule,
    RatingModule,
    TimelineModule,
    RippleModule,
    TabViewModule,
    PanelMenuModule,
    PasswordModule,
    InputNumberModule,
    CalendarModule,
    
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-right"
    }),
    CardModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
