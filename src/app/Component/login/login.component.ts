import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AccountService } from 'src/app/Services/account.service';
import { AccountData } from 'src/app/Model/AccountData.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: AccountData = new AccountData();
  constructor(
    private service: AccountService,
    private route: Router,
    private snackbar: MatSnackBar
  ) { }
  email = new FormControl('', [
    Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),]);
  password = new FormControl('', [Validators.required, Validators.minLength(6),]);

  ngOnInit() {
  }
  login() {
    // debugger;
    const data = {
      Email: this.email.value,
      Password: this.password.value
    }
    // debugger;
    console.log(data);
    this.service.login(data).subscribe(Response => {

      this.snackbar.open('Login Succesfully', '', { 'duration': 3000 });
      console.log(Response);
      if (Response == 'valid') {

        localStorage.setItem('token', Response.toLocaleString());
      }
      this.route.navigate(['/dashboard/note'], { queryParams: { page: 'notes' } });
    },
      (error) => {
        this.snackbar.open('Login failed', 'Dismiss', { 'duration': 3000 });
      });
    this.service.login(data);
  }
}
