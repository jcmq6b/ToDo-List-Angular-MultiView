import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //Prints json array to console of the current loginForm object
    console.warn(this.loginForm.value)
  }

}
