import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn  = false;
  constructor(private http: HttpClient) { }

  masterurl = 'https://api-staging-dip.botnoi.ai/'


  // login(username: string, password: string){
  //     this.loggedIn  = true;
  //     // console.log('login', username, password);
  //     return true;
  // }

  authLoginUser = (username: string, password: string): any => {
    return this.http.post(this.masterurl + 'login', { "email": username,"password": password})
    .pipe(map(res => res));
  }

  getlogin(){
    return {
      permission : localStorage.getItem('permission'),
      token : localStorage.getItem('token'),
      email : localStorage.getItem('email'),
      first_name : localStorage.getItem('first_name'),
      last_name : localStorage.getItem('last_name')
    }
  }

  getAuthToken(){
    return localStorage.getItem('token');
  }


  setlogin(res:any) {
      localStorage.setItem('token', res.access_token)
      localStorage.setItem('permission', res.data.permission)
      localStorage.setItem('email', res.data.email)
      localStorage.setItem('first_name', res.data.first_name)
      localStorage.setItem('last_name', res.data.last_name)
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
  isAuthenticated(): boolean {
    return this.loggedIn ;
  }
}

