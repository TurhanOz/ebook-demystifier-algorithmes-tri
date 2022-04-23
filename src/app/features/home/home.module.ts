import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './page/home/home.page';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HomePage,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
