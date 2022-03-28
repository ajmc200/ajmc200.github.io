import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { EstimatorComponent } from './components/estimator/estimator.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { IntPaintEstimateComponent } from './components/int-paint-estimate/int-paint-estimate.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomepageComponent,
    EstimatorComponent,
    IntPaintEstimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SwiperModule,
    CdkAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
