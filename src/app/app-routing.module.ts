import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimatorComponent } from './components/estimator/estimator.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'estimator', component: EstimatorComponent},
  {path:'gallery', component: GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
