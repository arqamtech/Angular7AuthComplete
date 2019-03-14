import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/Services/Clients/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(
    private clientService: ClientService,
  ) {

  }

  ngOnInit() {
  }



  onSubmit() {
    let data = this.clientService.newClient.value;
    console.log(data);
    
    this.clientService.addClient(data).then(res => {


    });
  }
}
