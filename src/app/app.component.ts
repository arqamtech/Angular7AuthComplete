import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { tap } from 'rxjs/operators';
import { GetUserService } from './Services/User/getUser/get-user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userId: string = '';
  constructor(
    private authService: AuthService,
    private getUsers : GetUserService,
    ) {

  }
  ngOnInit() {
    this.doSomething();
  }

  user;
  
//   getCoffeeOrders = () =>
//   this.getUsers
//   .getUser().subscribe(res =(this.user = res));

// );

  doSomething() {
    this.authService.isLoggedIn().pipe(
      tap(user => {
        if (user) {
          this.userId = user.uid;
          console.log(this.userId)
        }
      })
    )
      .subscribe()
  }
}


