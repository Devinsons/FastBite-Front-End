import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormFieldModule, MatHint} from '@angular/material/form-field';
import {MatInput} from "@angular/material/input";
import {Router} from "@angular/router";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatOption, provideNativeDateAdapter} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-common-register-section',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatCard,
    MatCardContent,
    MatFormFieldModule,
    MatInput,
    MatButton,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatHint,
    MatOption,
    MatSelect,
    MatButtonToggleGroup,
    MatButtonToggle,

    NgIf,
    MatToolbar,
    NgOptimizedImage
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  hide = true
  constructor(private router: Router, private _snackBar: MatSnackBar) {
  }
  onIconClick() {
    this.router.navigate(['/login'])
  }

  isChef = false;

  onUserTypeChange(event: MatButtonToggleChange) {
    this.isChef = event.value === 'chef';
  }

  isCEO = true;

  openSnackBar() {
    this._snackBar.open('Registrado con éxito');
  }


}

