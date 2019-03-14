import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { HomeComponent } from './MainPages/home/home.component';
import { AddClientComponent } from './Client/add-client/add-client.component';
import { ClientDetailComponent } from './Client/client-detail/client-detail.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'signUp', component : SignUpComponent},
  {path : 'newClient', component : AddClientComponent},
  {path : 'client/:id', component : ClientDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
