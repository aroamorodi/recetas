import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('../auth/pages/auth-page/auth-page.component').then(m => m.AuthPageComponent),
    children: [
      {
        path: 'login',
        loadComponent: () => import('../auth/pages/login-page/login-page.component').then(m => m.LoginPageComponent),
      },
      {
        path: 'register',
        loadComponent: () => import('../auth/pages/register-page/register-page.component').then(m => m.RegisterPageComponent)
      },
      {
        path: '**',  // Ruta wildcard para manejar rutas no válidas
        redirectTo: 'login'
      }
    ]
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
