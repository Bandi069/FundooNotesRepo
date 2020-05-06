import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private service: AccountService,
    private route: Router,
    private snackBar: MatSnackBar) { }

  password = new FormControl('', [
    Validators.required, Validators.minLength(8),]);
  confirmPassword = new FormControl('', [
    Validators.required, Validators.minLength(8),]);
  ngOnInit() {
  }
  resetPassword() {
    if (this.password != null && this.confirmPassword === this.password) {
      const data =
      {
        password: this.password,
        confirmPassword: this.confirmPassword
      };
      this.service.forgot(data).subscribe(Response => {
        console.log('response', Response);
        this.snackBar.open('Password Reset Successfull', 'Dismiss', { duration: 3000 });
        token: localStorage.setItem('token', Response.toLocaleString());
      });
    }
    else
      this.snackBar.open('Password incorrect', '', { duration: 4000 });
  }
}
