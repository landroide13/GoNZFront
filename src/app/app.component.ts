import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FrontNZGo';

  token = this.cookie.get('go-token')

  constructor(private cookie: CookieService, private router: Router) { }

  logout(){
    this.cookie.delete('go-token');
    this.router.navigate(['/auth'])
  }




}
