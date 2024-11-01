import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDirectionComponent } from './components/create-direction/create-direction.component';
import { CreateEntrepriseComponent } from './components/create-entreprise/create-entreprise.component';
import { DeleteEntrepriseComponent } from './components/delete-entreprise/delete-entreprise.component';
import { DetailEntrepriseComponent } from './components/detail-entreprise/detail-entreprise.component';
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
    path: 'Entreprises',
    component: ListeEntrepriseComponent,
  },

  {
    path: 'Accueil',
    component: AccueilComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', // Par défaut, affiche ListeEntreprise
        component: ListeEntrepriseComponent,
      },
      {
        path: 'Creer-entreprise',
        component: CreateEntrepriseComponent,
      },
      {
        path: 'Creer-direction',
        component: CreateDirectionComponent,
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
        path: 'detail-entreprise/:idEntreprise',
        component: DetailEntrepriseComponent,
      },
      {
        path: 'update-entreprise/:idEntreprise',
        component: UpdateEntrepriseComponent,
      },
      {
        path: 'supprimer-entreprise/:idEntreprise',
        component: DeleteEntrepriseComponent,
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
