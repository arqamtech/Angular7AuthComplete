import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
  ) { }

  signIn = new FormGroup({
    Eemail: new FormControl(""),
    Pass: new FormControl(""),
  });

  signUp = new FormGroup({
    Name: new FormControl(""),
    Email: new FormControl(""),
    Pass: new FormControl(""),
  });


  loginM(data) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.signInWithEmailAndPassword(data.email, data.pass).then(res => { }, err => reject(err));
    });
  }


  signUpM(data) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.createUserWithEmailAndPassword(data.email, data.pass).then(res => {

        this.firestore
          .collection(`Users`).doc(`${res.user.uid}`)
          .set(data)
          .then(res => { }, err => reject(err));


      }, err => reject(err));
    });
  }




  logout() {
    this.fireAuth.auth.signOut();
  }
}
