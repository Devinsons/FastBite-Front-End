import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrl: './dialog-content.component.css'
})
export class DialogContentComponent {

  constructor(private  router: Router) {
  }

  navigateToPlanSubscription() {
    this.router.navigate(['/restaurants']);
  }
}
