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
import { RentalComponent } from './components/rental/rental.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import {MenubarModule} from 'primeng/menubar';
import { NavComponent } from './components/shared/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarDetailComponent,
    BrandAddComponent,
    ColorAddComponent,
    RentalComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataViewModule,
    ButtonModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RatingModule,
    RippleModule,
    TabViewModule,
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
