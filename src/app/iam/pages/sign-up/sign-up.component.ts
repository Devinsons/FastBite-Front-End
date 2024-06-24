import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  registerForm : FormGroup;

  hide = true
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      Role: ['', Validators.required],
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Address: ['', Validators.required],
      Schedule: ['', Validators.required],
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }


  onIconClick() {
    this.router.navigate(['/login'])
  }


  register() {
    const { Role, Name, Email, Address, Schedule, Username, Password } = this.registerForm.value;
      // Step 1: Sign-up
    this.registerService.signUp({ username: Username, password: Password, roles: [Role] }).subscribe(userResponse => {
      const userId = userResponse.id;

      // Step 2: Create restaurant or company based on role
      const entityData = {
        name: Name,
        email: Email,
        address: Address,
        schedule: Schedule,
        image: 'assets/img/anonimo.png',
        userId
      };

      if (Role === 'ROLE_RESTAURANT') {
        this.registerService.createRestaurant(entityData).subscribe(() => {
          this.openSnackBar('Registered as Restaurant');
          this.router.navigate(['/login']);
        });
      } else if (Role === 'ROLE_COMPANY') {
        this.registerService.createCompany(entityData).subscribe(() => {
          this.openSnackBar('Registered as Company');
          this.router.navigate(['/login']);
        });
      }
    });
    this.snackBar.open('Registrado con éxito');
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }
}
