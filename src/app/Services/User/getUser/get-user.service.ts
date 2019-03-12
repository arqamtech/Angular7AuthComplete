import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../Auth/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
  ) {
    this.getUid();
  }
  getUid() {
    this.authService.isLoggedIn().pipe(
      tap(user => {
        if (user) {
          this.getUser(user.uid)
        }
      })
    )
      .subscribe()
  }
  getUser(id) {
    return this.firestore.collection("Users").doc(id).snapshotChanges();
  }
}
