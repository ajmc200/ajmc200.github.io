import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstimatorComponent } from './components/estimator/estimator.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { IntPaintEstimateComponent } from './components/int-paint-estimate/int-paint-estimate.component';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomepageComponent,
    EstimatorComponent,
    IntPaintEstimateComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CdkAccordionModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatNativeDateModule,
    HttpClientModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatChipsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
