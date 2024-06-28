import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageViewComponent } from './landing-page-view.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    LandingPageViewComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
