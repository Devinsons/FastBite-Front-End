import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  private apiUrl = `${environment.serverBasePath}`;

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private http: HttpClient
  ) { }

  onLoginClick(user: string, password: string) {
    const loginPayload = { username: user, password: password };

    this.http.post<any>(`${this.apiUrl}/authentication/sign-in`, loginPayload)
      .subscribe(
        response => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('userId', response.id);

            this.openSnackBar('Logeado con éxito', 'Bienvenido a la aplicación');
            this.getProfileData(response.id);
          } else {
            this.openSnackBar('Error', 'Respuesta inesperada del servidor');
          }
        },
        error => {
          this.openSnackBar('Error', 'No se pudo iniciar sesión. Por favor, intenta nuevamente.');
        }
      );
  }

  getProfileData(userId: number) {
    this.http.get<any[]>(`${this.apiUrl}/profiles`)
      .subscribe(
        profiles => {
          const userProfile = profiles.find(profile => profile.userId === userId);
          if (userProfile) {
            localStorage.setItem('profileId', userProfile.Id.toString());
            this.getRestaurantData(userProfile.Id);
            this.getCompanyData(userProfile.Id);
          } else {
            this.openSnackBar('Error', 'Perfil no encontrado');
          }
        },
        error => {
          this.openSnackBar('Error', 'No se pudo obtener el perfil del usuario.');
        }
      );
  }

  getRestaurantData(profileId: number) {
    this.http.get<any[]>(`${this.apiUrl}/restaurants`)
      .subscribe(
        restaurants => {
          const restaurant = restaurants.find(r => r.profileId === profileId);
          if (restaurant) {
            localStorage.setItem('acmeRestaurantRecordId', restaurant.acmeRestaurantRecordId);
          } else {
            localStorage.setItem('acmeRestaurantRecordId', 'null');
          }
          this.router.navigate(['/home']);
        },
        error => {
          this.openSnackBar('Error', 'No se pudo obtener los datos del restaurante.');
        }
      );
  }

  getCompanyData(profileId: number) {
    this.http.get<any[]>(`${this.apiUrl}/companys`)
      .subscribe(
        companys => {
          const company = companys.find(r => r.profileId === profileId);
          if (company) {
            localStorage.setItem('acmeCompanyRecordId', company.acmeCompanyRecordId);
          } else {
            localStorage.setItem('acmeCompanyRecordId', 'null');
          }
          this.router.navigate(['/home']);
        },
        error => {
          this.openSnackBar('Error', 'No se pudo obtener los datos del company.');
        }
      );
  }

  onRegisterClick() {
    this.router.navigate(['/register']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onChangePasswordClick() {
    const newPassword = window.prompt('Por favor, ingresa tu nueva contraseña');
    if (newPassword) {
      this.openSnackBar('Contraseña Cambiada', 'Cerrar');
    }
  }
}
