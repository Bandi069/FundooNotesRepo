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
    private service: AccountService,
    private route: Router,
    private snackbar: MatSnackBar
  ) { }
  firstName = new FormControl('', [
    Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*'),]);
  lastName = new FormControl('', [
    Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*'),]);
  email = new FormControl('', [
    Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(6),]);
  errorMessageForEmptyField = '';
  ngOnInit() { }

  register() {

    debugger;
    const datavalue = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value
    };
    debugger;
    this.service.registerfun(datavalue).subscribe(
      (result) => {
        this.snackbar.open('Registered Successfully', '', { duration: 3000 });
        console.log('result :', result);
        this.route.navigate(['/login']);
      },
      (error) => {
        this.snackbar.open('Registration failed', 'Cancel', { duration: 4000 });
      });
  }
}

