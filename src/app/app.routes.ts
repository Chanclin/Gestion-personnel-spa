import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateEntrepriseComponent } from './create-entreprise/create-entreprise.component';
import { ListeEntrepriseComponent } from './services/liste-entreprise/liste-entreprise.component';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';
import { DetailEntrepriseComponent } from './detail-entreprise/detail-entreprise.component';

ListeEntrepriseComponent
export const routes: Routes = [
    {path: 'entreprises', component: ListeEntrepriseComponent},
    {path:'create-entreprise',component:CreateEntrepriseComponent},
    {path:'update-entreprise/:idEntreprise',component:UpdateEntrepriseComponent},
    {path: 'detail-Entreprise/:idEntreprise', component:DetailEntrepriseComponent},
    {path: '', redirectTo:'entreprises',pathMatch:'full'}


];

@NgModule({
    imports:[RouterModule.forRoot(routes),RouterOutlet],
    exports:[RouterModule]
})
export class AppComponent{}