import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AccountService {
  // Url: string;
  constructor(private http: HttpClient) { }
  registerfun(rdata) {
    debugger;
    return this.http.post(environment.Url + 'accountregistration', rdata);
  }
  login(ldata) {
    // debugger;
    return this.http.post(environment.Url + 'accountlogin', ldata);
  }

  googleLogin(gemail) {

    return this.http.post(environment.Url + 'googlelogin', gemail);
  }
  facebookLogin(email) {

    return this.http.post(environment.Url + 'facebooklogin', email);
  }

  forgot(fordata) {

    return this.http.put(environment.Url + 'forgotpassword', fordata);
  }
  resetpassword(redata) {
    return this.http.put(environment.Url + 'resetpassword', redata);
  }

  logout(emaillog) {
    let headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.http.put(environment.Url + 'logout' + emaillog, null, { headers: headers });
  }
}
