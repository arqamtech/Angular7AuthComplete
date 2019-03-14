import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private firestore: AngularFirestore,
  ) {

  }


  newClient = new FormGroup({
    Name: new FormControl(""),
    ContactName: new FormControl(""),
    ContactNumber: new FormControl(""),
  })

  addClient(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("Clients")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  getClients() {
    return this.firestore.collection("Clients").snapshotChanges();
  }

  deleteClient(id) {
    return this.firestore
      .collection("Clients")
      .doc(id)
      .delete();
  }


  getSingleClient(id) {
    return this.firestore
      .collection("Clients")
      .doc(id)
      .snapshotChanges();

  }

}
