import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }


  onSubmit() {
    let data = this.authService.signUp.value;

    this.authService.signUpM(data).then(res => {
      // this.loginService.form = null;

    });
  }


}
