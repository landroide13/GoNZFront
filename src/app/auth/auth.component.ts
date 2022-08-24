import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NzapiService } from '../services/nzapi.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private api: NzapiService, private cookie: CookieService, private router: Router) { }

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit() {
    const gotoken = this.cookie.get('go-token')
    if(gotoken){
      this.router.navigate(['/agents'])
    }
  }   

  saveForm(){
    console.log(this.authForm.value)
    this.api.loginUser(this.authForm.value).subscribe(
      (res: any) => {
        console.log(res),
        this.cookie.set('go-token', res.token)
      },
      err => console.log(err)
    )
  }

}
