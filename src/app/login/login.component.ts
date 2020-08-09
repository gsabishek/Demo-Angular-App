import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { config } from '../../assets/config/config';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {'class': 'someClass1'}
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  submitted: boolean;


  constructor(private router: Router, private loginservice: LoginService,  private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.login = this.formBuilder.group({      
      EmailAddress: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ["", Validators.required]
    })
  }

  get loginControl() {
    return this.login.controls;
  }

  loginClick(){
    console.log("login",this.login.value);
    this.submitted = true;
    if(this.login.valid){  
      let accessToken = "123456789";   
      localStorage.setItem("accessToken",accessToken);
      this.router.navigateByUrl(`/dashboard`);
    }
  	
  }
}
