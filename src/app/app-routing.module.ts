import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { GuardAdminGuard } from './guards/guard-admin.guard';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfilComponent } from './profil/profil.component';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent,canActivate:[GuardAdminGuard]},
  {path:'profil',children:[
    {path:'views',component:ViewsComponent},
    {path:'details',component:DetailsComponent}
  ]},
  {path:'contact',redirectTo:'about',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
