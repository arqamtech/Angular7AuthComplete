import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }



  onSubmit() {
    let data = this.authService.signIn.value;

    this.authService.loginM(data).then(res => {
      // this.loginService.form = null;

    });
  }

}
