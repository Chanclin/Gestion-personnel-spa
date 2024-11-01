import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEntrepriseComponent } from './components/create-entreprise/create-entreprise.component';
import { ListeDirectionComponent } from './components/liste-direction/liste-direction.component';
import { ListeEntrepriseComponent } from './components/liste-entreprise/liste-entreprise.component';
import { UpdateEntrepriseComponent } from './components/update-entreprise/update-entreprise.component';
import { AuthGuard } from './guards/auth.guard';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { BienvenueComponent } from './pages/bienvenue/bienvenue.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { NontrouveComponent } from './pages/nontrouve/nontrouve.component';

// Définition des routes
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Bienvenue',
    pathMatch: 'full',
  },
  {
    path: 'Bienvenue',
    component: BienvenueComponent,
  },
  {
    path: 'Connexion',
    component: ConnexionComponent,
  },
  {
    path: 'Accueil',
    component: AccueilComponent,
    canActivate: [AuthGuard], // Ajout du guard ici
    children: [
      {
        path: '',
        component: ListeEntrepriseComponent,
      },
      {
        path: 'Creer-entreprise',
        component: CreateEntrepriseComponent,
      },
      {
        path: 'Entreprises',
        component: ListeEntrepriseComponent,
      },
      {
        path: 'Directions',
        component: ListeDirectionComponent,
      },
      {
        path: 'update-entreprise/:idEntreprise',
        component: UpdateEntrepriseComponent,
      },
      {
        path: 'update-entreprise',
        component: UpdateEntrepriseComponent,
      },
    ],
  },
  {
    path: 'Inscription',
    component: InscriptionComponent,
  },
  {
    path: '**',
    component: NontrouveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {} // Renommez la classe pour qu'elle reflète mieux son rôle
