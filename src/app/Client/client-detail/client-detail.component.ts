import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/Services/Clients/client.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private firestore: AngularFirestore,
  ) {

  }
  client;

  clientId;


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clientId = params['id'];
    });
    this.getClient();
  }
  getClient() {
    this.firestore
      .collection("Clients")
      .doc(this.clientId)
      .snapshotChanges()
      .subscribe(res => (this.client = res.payload.data()));
  }

  delClient() {
    this.clientService.deleteClient(this.clientId)
  }
}
