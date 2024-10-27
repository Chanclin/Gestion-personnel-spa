import { Routes } from '@angular/router';
import { CreateEntrepriseComponent } from './components/create-entreprise/create-entreprise.component';
import { ListeEntrepriseComponent } from './components/liste-entreprise/liste-entreprise.component';
import { AuthGuard } from './guards/auth.guard';
import { EquipeComponent } from './page/equipe/equipe.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { RegisterComponent } from './page/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'welcome', component: EquipeComponent },
  {
    path: 'create-entreprise',
    component: CreateEntrepriseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'entreprises',
    component: ListeEntrepriseComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotfoundComponent },
];
