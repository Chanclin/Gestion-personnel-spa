import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateEntrepriseComponent } from './components/create-entreprise/create-entreprise.component';
import { ListeEntrepriseComponent } from './components/liste-entreprise/liste-entreprise.component';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';
import { DetailEntrepriseComponent } from './components/detail-entreprise/detail-entreprise.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { EquipeComponent } from './page/equipe/equipe.component';
import { HomeComponent } from './page/home/home.component';

// Définition des routes
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'teams',
    component: EquipeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'entreprises',
    component: ListeEntrepriseComponent,
  },
  {
    path: 'create-entreprise',
    component: CreateEntrepriseComponent,
  },
  {
    path: 'update-entreprise/:idEntreprise',
    component: UpdateEntrepriseComponent,
  },
  
  {
    path: 'detail-entreprise/:idEntreprise',
    component: DetailEntrepriseComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} // Renommez la classe pour qu'elle reflète mieux son rôle
