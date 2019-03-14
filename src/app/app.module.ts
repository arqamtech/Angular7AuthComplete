import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { AuthService } from './Services/Auth/auth.service';
import { HomeComponent } from './MainPages/home/home.component';
import { GetUserService } from './Services/User/getUser/get-user.service';
import { ViewClientsComponent } from './Client/view-clients/view-clients.component';
import { AddClientComponent } from './Client/add-client/add-client.component';
import { ClientDetailComponent } from './Client/client-detail/client-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ViewClientsComponent,
    AddClientComponent,
    ClientDetailComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    AuthService,
    GetUserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
