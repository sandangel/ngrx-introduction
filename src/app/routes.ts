import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { NotFoundPageComponent } from './core/not-found-page.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundPageComponent },
];
