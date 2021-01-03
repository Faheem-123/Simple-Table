import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  error:string;
  data:string;

  loginForm:FormGroup;
  result:string;

  constructor(private myservice:AuthService, private router:Router){
  }
  ngOnInit() {
    this.loginForm=new FormGroup({
      // id: new FormControl(null, [Validators.required]),
      first_name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    // console.log(this.loginForm.value)
    this.myservice.getLoginForm(this.loginForm.value).subscribe(
      (data) => {
        this.data=data;
       console.log("Login From data"+this.data)
        // if (data === true  || data === false) {
        //   this.data = data;
        // }
      },
      (error) => {
        console.log(this.error)
        this.error = error
      })

  }

}
