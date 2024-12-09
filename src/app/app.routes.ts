import { Routes } from '@angular/router';
import path from 'path';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // HomeComponent tương ứng với app-home
  { path: 'home', component: HomeComponent }, // HomeComponent tương ứng với app-home
  { path: 'profile', component: ProfileComponent },
];

