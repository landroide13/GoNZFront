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

  registerMode = false;

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
    if(!this.registerMode){
      this.loginU()
    }else{
      console.log(this.authForm.value)
      this.api.registerUser(this.authForm.value).subscribe(
        res => {
          console.log(res),
          this.loginU()
        },
        err => console.log(err)
      )
    }
  }

  loginU(){
    console.log(this.authForm.value)
    this.api.loginUser(this.authForm.value).subscribe(
      (res: any) => {
        console.log(res),
        this.cookie.set('go-token', res.token),
        this.router.navigate(['/agents'])
      },
      err => console.log(err)
    )
  }

}
