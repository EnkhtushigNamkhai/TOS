import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './homePage/homePage.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {SummitPageComponent} from './summit-page/summit-page.component';

const routes: Routes = [
 { path: 'home', component: HomePageComponent},
 { path: 'about', component: AboutPageComponent},
 { path: 'summit', component: SummitPageComponent},
 { path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
