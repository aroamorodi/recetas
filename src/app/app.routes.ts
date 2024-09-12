import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('../auth/pages/login-page/login-page.component').then(m => m.LoginPageComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./components/homePage/homePage.component').then(m => m.HomePageComponent)
  },
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  }
];
