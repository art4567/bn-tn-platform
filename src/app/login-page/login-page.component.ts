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
    this.selectedIndex = 1;
  }
  gotoLoginPage() {
    this.selectedIndex = 0;
  }
  LoginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  role: string = 'admin';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {
    let permission = this.authService.getlogin()
    if (permission.token) {
      this.router.navigate(['/home'])
    }
  }

  onSubmit(): void {
    if (this.LoginForm.invalid) {
      return;
    }
    let username = this.LoginForm.get('username')?.value || '';
    const password = this.LoginForm.get('password')?.value || '';
    this.authService.authLoginUser(username, password).subscribe((response: any) => {
      this.authService.setlogin(response)
      this.router.navigate(['/home'])

    }, (error: any) => {

      console.log('error', error)

    })
  }

  onUsernameChange(event: string) {
    console.log('New username:', event);
  }
}
