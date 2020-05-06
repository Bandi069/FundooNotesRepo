import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private service:AccountService,
    private route:Router,
    private snackbar:MatSnackBar
  ) { }
  firstName = new FormControl('', [
    Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*'), ]);
  lastName = new FormControl('', [
    Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*'), ]);
  email = new FormControl('', [
    Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), ]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(6), ]);
  errorMessageForEmptyField = '';
  ngOnInit() {
  // }
  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'Enter emailid' : this.email.hasError('email') ? 'Invalid emailid' :
  //       this.email.hasError('minlength') ? 'emailid name should be min 4 characters' :
  //         this.email.hasError('maxlength') ? 'emailid Length upto 20 characters' :
  //           '';
  // }
  // passwordgetErrorMessage() {
  //   return this.password.hasError('required') ? 'Enter a password' :
  //     this.password.hasError('pattern') ? 'Password should be alphanumeric' :
  //       this.password.hasError('minlength') ? 'Password Minmum length 6 characters' :
  //         this.password.hasError('maxlength') ? 'Password Max Legnth upto 15 characters' :
  //           '';
  }
  register(){
    const data={
    firstName:this.firstName.value,
    lastName:this.lastName.value,
    emailid:this.email.value,password:this.password.value
    };
    console.log(data);
    this.service.register(data).subscribe((result)=>{
      this.snackbar.open('Sucessfully registered','Dismiss',{duration :4000});
      const temp=JSON.stringify(result);
    const res=JSON.parse(temp);
  this.route.navigate(['/login']);
    },
  (error)=>{
    this.snackbar.open('Registration failed', 'Dismiss',{duration:4000});
});
//this.service.register(data);
  }
}

