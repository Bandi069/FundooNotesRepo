import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tokenName } from '@angular/compiler';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotForm: FormGroup;
  constructor(private service: AccountService,
    private route: Router,
    private snackbar: MatSnackBar) { }
  email = new FormControl('', [
    Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),]);

  ngOnInit() {
  }

  forgotpassword() {
    debugger;
    if (this.email.value != null) {
      const forg = {
        email: this.email.value,
      };
      debugger;
      this.service.forgot(forg).subscribe(result => {
        console.log('result', result);
        this.snackbar.open('Reset password link sent to registered mail', 'Dismiss', { 'duration': 4000 });
        token: localStorage.setItem('token', result.toLocaleString());
      });
      debugger;
      this.route.navigate(['/resetpassword']);
    }
    else {
      this.snackbar.open("Invalid email address", "", { 'duration': 3000 });
    }
  }
}
