import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateEntrepriseComponent } from './create-entreprise/create-entreprise.component';
import { ListeEntrepriseComponent } from './services/liste-entreprise/liste-entreprise.component';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';
import { DetailEntrepriseComponent } from './detail-entreprise/detail-entreprise.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { NotfoundComponent } from './page/notfound/notfound.component';

ListeEntrepriseComponent
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

@NgModule({
    imports:[RouterModule.forRoot(routes),RouterOutlet],
    exports:[RouterModule]
})
export class AppComponent{}