import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // //Global variable, FormGroup object
  // loginForm = new FormGroup({
  //   //key is email value is string
  //   email: new FormControl(''),
  //   //key is password value is string
  //   password: new FormControl(''),
  // })

  //Group is a json object
  loginForm = this.fb.group({
    //Validating on the back end as well as front end
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  //Importing and initializing formbuilder object in constructor
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //Prints json array to console of the current loginForm object
    console.warn(this.loginForm.value)

    if(this.loginForm.value.email == "test@test.com" && this.loginForm.value.password == "pass"){
      //If login is valid, then navigate to the home page, using Router import
      this.route.navigate(["/home"])
    }
    else{
      alert("Wrong email and password");
    }
  }

}
