import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
    if (this.email.value != null && this.password.value >= 8) {
      const data = {
        email: this.email.value,
        password: this.password.value

      };
      console.log(data);
      this.service.login(data).subscribe(Response => {
        this.snackbar.open('Login Succesfully', 'Dismiss', { 'duration': 3000 });
        console.log(Response);
        localStorage.setItem('token', Response.toLocaleString());
      },
        (error) => {
          this.snackbar.open('Login failed', 'Dismiss', { 'duration': 3000 });

        });
      //this.service.login(data);
      this.route.navigate(['/dashboard/note'], { queryParams: { page: 'notes' } });
    }
  }
}
