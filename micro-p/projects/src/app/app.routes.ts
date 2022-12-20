import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  {
    path: 'wordle',
    loadChildren: () =>
      import('wordle/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
];
