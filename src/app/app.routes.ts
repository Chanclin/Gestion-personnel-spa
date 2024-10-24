import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { RegisterComponent } from './page/register/register.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
