import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router,ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  // @ViewChild('loginForm') loginForm: NgForm;
  // emailModel = '';
  // passwordModel = '';
  // loginregcodeModel='';


  buttonDisabled = false;
  buttonState = '';

  constructor(private authService: AuthService, private notifications: NotificationsService, private router: Router, private formBuilder: FormBuilder) { }

  LoginForm = this.formBuilder.group({
    UserName: ['', [Validators.required]],
    Password: ['', [Validators.required]],
    LoginRegCode: ['', [Validators.required]]
  });

  ngOnInit() {

    

  }

  onSubmit() {
    if (!this.LoginForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';

    this.authService.signIn(this.LoginForm.value).subscribe(
      responce => {
        this.buttonDisabled = false;
        this.buttonState = '';
        const token = (<any>responce).token;
        const modules = (<any>responce).modules;


            if (token) {
              this.authService.userSignedIn(token,modules);
              this.router.navigate([environment.adminRoot]);

            }
            else{
              this.buttonDisabled = false;
              this.buttonState = '';
            }

        },
        err => {
          this.buttonDisabled = false;
          this.buttonState = '';
          this.notifications.create('Error', err.message, NotificationType.Bare, { theClass: 'outline primary', timeOut: 6000, showProgressBar: false });
        });
  }
}
