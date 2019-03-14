import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/Services/Clients/client.service';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.scss']
})
export class ViewClientsComponent implements OnInit {

  constructor(
    private clientService: ClientService,
  ) {

  }

  ngOnInit() {
    this.getClients();
  }
  clients;

  getClients = () =>
    this.clientService
      .getClients()
      .subscribe(res => (this.clients = res));
}
