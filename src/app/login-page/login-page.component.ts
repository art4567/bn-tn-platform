import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  selectedIndex: number = 0;
  maxNumberOfTabs: number = 2;
  // selectedTab: number=0;
  gotoForgetPasswordPage() {
          this.selectedIndex =1;
  }
  gotoLoginPage() {
    this.selectedIndex =0;
}
LoginForm = new FormGroup({
  username: new FormControl(''),
  password: new FormControl('')
});
// username = this.LoginForm.get('username').value;
// password = this.LoginForm.get('password').value;
// username: string = '1';
// password: string = '1';
role: string = 'admin';
errorMessage = '';

constructor(private authService: AuthService, private router: Router, private roleService: RoleService) {
  let permission = this.authService.getlogin()
  if (permission.token) {
    this.router.navigate(['/home'])
  }
}

onSubmit(): void {
  if (this.LoginForm.invalid) {
    return;
  }
  let username = this.LoginForm.get('username')?.value|| '';
  const password = this.LoginForm.get('password')?.value|| '';
  this.authService.authLoginUser(username, password).subscribe((response:any) => {
        //   const mock = {
        //     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODU1NDgyMDYsImlhdCI6MTY4NTQ2MTgwNiwidXNlciI6eyJlbWFpbCI6InRyYWthbndpdGtAYm90bm9pZ3JvdXAuY29tIn19.kfZ7VvTrztg7hIa26jvxpPAWOH5tebdyNOwKE308Y5E",
        //     "data": {
        //         "email": "trakanwitk@botnoigroup.com",
        //         "first_name": "takanwtk",
        //         "id": "644f4a82e615d5594df47ac4",
        //         "last_name": "kuesungnoen",
        //         "permission": "user",
        //         "register_date": "2023-05-01T05:13:38.655Z",
        //         "verify": false
        //     }
        // }
        this.authService.setlogin(response)
        this.router.navigate(['/home'])

  }, (error:any) => {
    // const mock = {
    //   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODU1NDgyMDYsImlhdCI6MTY4NTQ2MTgwNiwidXNlciI6eyJlbWFpbCI6InRyYWthbndpdGtAYm90bm9pZ3JvdXAuY29tIn19.kfZ7VvTrztg7hIa26jvxpPAWOH5tebdyNOwKE308Y5E",
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
    // this.authService.setlogin(mock)
   console.log('error', error)

  })

  // if (this.authService.login(username, password)) {


  //   this.router.navigate(['/home']);
  // } else {
  //   console.log('Login failed')
  //   this.errorMessage = 'Invalid username or password';
  // }
}

onUsernameChange(event: string) {
  console.log('New username:', event);
}

// onEventChangeTab(state: string){
//   switch (state) {
//       case "forget":
//           this.selectedTab = 1;
//           break;
//       default:
//           this.selectedTab = 0;
//   }
// }


}
