import { Routes } from '@angular/router';
import { LoginComponent } from './src/app/page/login/login.component';
import { RegisterComponent } from './src/app/page/register/register.component';
import { NotfoundComponent } from './src/app/page/notfound/notfound.component';


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
