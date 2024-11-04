import { Routes } from '@angular/router';
import { DashboardComponent } from './components/body/dashboard/dashboard.component';
import { FormDirectionComponent } from './components/direction/form-direction/form-direction.component';
import { ListeDirectionsComponent } from './components/direction/liste-directions/liste-directions.component';
import { DetailsEntrepriseComponent } from './components/entreprise/details-entreprise/details-entreprise.component';
import { FormEntrepriseComponent } from './components/entreprise/form-entreprise/form-entreprise.component';
import { ListeEntreprisesComponent } from './components/entreprise/liste-entreprises/liste-entreprises.component';
import { DevComponent } from './pages/dev/dev.component';
import { AuthGuard } from './guards/auth.guard';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { BienvenueComponent } from './pages/bienvenue/bienvenue.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { IntrouvableComponent } from './pages/introuvable/introuvable.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenue',
    pathMatch: 'full',
  },
  {
    path: 'bienvenue',
    component: BienvenueComponent,
  },
  {
    path: 'connexion',
    component: ConnexionComponent,
  },
  {
    path: 'accueil',
    component: AccueilComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'entreprises/ajouter',
        component: FormEntrepriseComponent,
      },
      {
        path: 'entreprises',
        component: ListeEntreprisesComponent,
      },

      {
        path: 'directions', // Liste des directions
        component: ListeDirectionsComponent,
      },
      {
        path: 'directions/ajouter', // Route pour ajouter une direction
        component: FormDirectionComponent,
      },
      {
        path: 'directions/modifier/:id', // Route pour modifier une direction existante
        component: FormDirectionComponent,
      },
      {
        path: 'entreprises/details/:id',
        component: DetailsEntrepriseComponent,
      },
      {
        path: 'entreprises/modifier/:id', // Route pour la modification
        component: FormEntrepriseComponent,
      },
      {
        path: 'dev',
        component: DevComponent,
      },
    ],
  },
  {
    path: '**',
    component: IntrouvableComponent,
  },
];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
