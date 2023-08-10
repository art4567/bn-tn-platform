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

  // login(username: string, password: string): boolean {
  //   if (username === '1' && password === '1') {
  //     this.loggedIn  = true;
  //     console.log('login', username, password);
  //     return true;
  //   }
  //   console.log('login', username, password);
  //   alert('Not Login');
  //   return false;
  // }
  login(username: string, password: string){
      this.loggedIn  = true;
      // console.log('login', username, password);
      return true;
  }
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
      // let data = {
      //   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODMwMDQ0NDMsImlhdCI6MTY4MjkxODA0MywidXNlciI6eyJlbWFpbCI6InRyYWthbndpdGtAYm90bm9pZ3JvdXAuY29tIn19.TpJ6IRcDHIY6-g676uJfVNHtiTJjp6WmXKuNrqfUKQo",
      //   "data": {
      //       "email": "trakanwitk@botnoigroup.com",
      //       "first_name": "takanwtk",
      //       "id": "644f4a82e615d5594df47ac4",
      //       "last_name": "kuesungnoen",
      //       "permission": "user",
      //       "register_date": "2023-05-01T05:13:38.655Z",
      //       "verify": false
      //   }
      // }
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

