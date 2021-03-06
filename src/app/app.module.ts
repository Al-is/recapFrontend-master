import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { BrandColorComponent } from './components/brand-color/brand-color.component';
import { Cardetails2Component } from './components/cardetails2/cardetails2.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';

import { ToastrModule } from 'ngx-toastr';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { PaymentComponent } from './components/payment/payment.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { UpdateBrandComponent } from './components/update-brand/update-brand.component';
import { UpdateColorComponent } from './components/update-color/update-color.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent,
    CardetailComponent,
    BrandColorComponent,
    Cardetails2Component,
    CarFilterPipe,
    BrandFilterPipe,
    ColorFilterPipe,
    PaymentComponent,
    AddBrandComponent,
    AddColorComponent,
    AddCarComponent,
    UpdateBrandComponent,
    UpdateColorComponent,
    UpdateCarComponent,
    LoginComponent,
    RegisterComponent,
    UpdateUserComponent,
    DialogExampleComponent,
  ],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    MatSlideToggleModule,
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
