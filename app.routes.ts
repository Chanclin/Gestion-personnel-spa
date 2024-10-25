import { Routes } from '@angular/router';
import { LoginComponent } from './src/app/page/login/login.component';
import { RegisterComponent } from './src/app/page/register/register.component';
import { NotfoundComponent } from './src/app/page/notfound/notfound.component';
import { CreateEntrepriseComponent } from './src/app/components/create-entreprise/create-entreprise.component';
import { ListeEntrepriseComponent } from './src/app/components/liste-entreprise/liste-entreprise.component';
import { EquipeComponent } from './src/app/page/equipe/equipe.component';


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
    path: 'create-entreprise',
    component:CreateEntrepriseComponent
  },

  {
    path: 'entreprises',
    component: ListeEntrepriseComponent
  },
  {
    path: 'teams',
    component: EquipeComponent
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
