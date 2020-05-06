import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AccountService {
  url: string;
  card;
  constructor(private http: HttpClient) { }
  register(data) {
   
    return this.http.post(environment.Url + 'register', data);
  }
  login(data) {
    
    return this.http.post(environment.Url + 'login', data);
  }

  googleLogin(email) {
    
    return this.http.post(environment.Url + 'googlelogin',email);
  }

  facebookLogin(email) {
    // const param = {
    //   Email: email
    // };
    return this.http.post(environment.Url + 'facebooklogin', email);
  }

  forgot(data) {
    
    return this.http.post(environment.Url + 'forgotpassword', data);
  }
  resetpassword(data) {
    return this.http.put(environment.Url + 'resetpassword', data);
  }
  
  logout(email) {
    let headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.http.put(environment.Url + 'logout' + email, null, { headers: headers });
  }
}
