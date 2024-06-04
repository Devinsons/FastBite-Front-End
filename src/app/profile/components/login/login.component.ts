import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatSnackBar} from '@angular/material/snack-bar';


import {Router} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'login-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatFormField,
    MatInput,
    MatFabButton,
    MatButton,
    MatIcon,
    MatCard,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  // constructor(private router: Router) ,
  constructor(private _snackBar: MatSnackBar, private router: Router) { }


  onLoginClick( user: string, password: string) {
    const hasUpperCase = /[A-Z]/.test(user);
    const hasLowerCase = /[a-z]/.test(user);
    const User_has_MinimumLength = user.length > 6;
    const Password_has_MinimumLength = password.length > 6;

    if (!user || !password) {
      this.openSnackBar('Error', 'Por favor, complete todos los campos');
    } else if(user && password) {
      if(!hasUpperCase || !hasLowerCase ){
        this.openSnackBar('Error', 'El usuario debe contener mayúsculas y minúsculas');
      }else  if(!User_has_MinimumLength) {
        this.openSnackBar('Error', 'El usuario debe  debe tener al menos 6 caracteres');
      } else if(!Password_has_MinimumLength){
        this.openSnackBar('Error', 'La contraseña debe tener al menos 6 caracteres');
      } else if( !User_has_MinimumLength  && !Password_has_MinimumLength ) {
        this.openSnackBar('Error', 'El usuario y la contraseña deben tener al menos 6 caracteres');
      }else {
        this.openSnackBar('Logeado Con Exito', ' Bienvenido a la aplicación');
      }
    } else {
      this.router.navigate(['/home']);
    }
  }

  onRegisterClick() {
    this.router.navigate(['/register']);
  }

  openSnackBar(user: string, password: string) {
    this._snackBar.open(user, password);
  }

  onChangePasswordClick() {
    const newPassword = window.prompt('Por favor, ingresa tu nueva contraseña');
    if (newPassword) {
      this.openSnackBar('Contraseña Cambiada', 'Cerrar');
    }
  }
}
