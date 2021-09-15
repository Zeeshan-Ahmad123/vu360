import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import { from } from 'rxjs';
//import { getUserRole } from 'src/app/utils/util';



export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ICreateCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  _baseUrl="https://localhost:44333/api/";


  signIn(credentials: any) {
    let Model = {UserName: credentials.UserName, Password: credentials.Password,LoginRegCode:credentials.LoginRegCode}
    return this.httpClient.post(this._baseUrl+'Authentication/LoginWithSP',Model);
  }
  userSignedIn(token,modules){
    let jwtData = token.split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    let username = decodedJwtData.nameid;
    let role = decodedJwtData.role;
    localStorage.setItem("token",token);
    localStorage.setItem("username",username);
    localStorage.setItem("role",role);
    localStorage.setItem("Modules",JSON.stringify(modules));
  }
  getUser(){
    let role = localStorage.getItem("role");
    let username = localStorage.getItem("username");
    return {username: username, role: role};
  }


  signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("Modules");
  }

  // register(credentials: ICreateCredentials) {
  //   return this.auth
  //     .createUserWithEmailAndPassword(credentials.email, credentials.password)
  //     .then(async ({ user }) => {
  //       user.updateProfile({
  //         displayName: credentials.displayName,
  //       });
  //       this.auth.updateCurrentUser(user);
  //       return user;
  //     });
  // }

  // sendPasswordEmail(email) {
  //   return this.auth.sendPasswordResetEmail(email).then(() => {
  //     return true;
  //   });
  // }

  // resetPassword(credentials: IPasswordReset) {
  //   return this.auth
  //     .confirmPasswordReset(credentials.code, credentials.newPassword)
  //     .then((data) => {
  //       return data;
  //     });
  // }

  // signIn(credentials: ISignInCredentials) {
  //   return this.auth
  //     .signInWithEmailAndPassword(credentials.email, credentials.password)
  //     .then(({ user }) => {
  //       return user;
  //     });
  // }
  // async getUser() {
  //   const u = await this.auth.currentUser;
  //   return { ...u, role: getUserRole() };
  // }
}
