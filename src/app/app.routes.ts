import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LetsTalkComponent } from './pages/lets-talk/lets-talk.component';

export const routes: Routes = [
{
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },    {
    path: 'lets-talk',
    loadComponent: () =>
      import('./pages/lets-talk/lets-talk.component').then(
        m => m.LetsTalkComponent
      ),
  },
];
