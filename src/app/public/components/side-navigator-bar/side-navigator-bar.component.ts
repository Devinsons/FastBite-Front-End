import { Component } from '@angular/core';
import {AuthService} from "../../../iam/services/auth.service";

@Component({
  selector: 'app-side-navigator-bar',
  templateUrl: './side-navigator-bar.component.html',
  styleUrl: './side-navigator-bar.component.css'
})
export class SideNavigatorBarComponent {
  constructor(private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
    // Puedes redirigir a la página de login u otra página después del logout
  }
}
