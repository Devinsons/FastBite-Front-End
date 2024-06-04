import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    { src: 'https://picsum.photos/200/300', alt: 'Imagen 1' },
    { src: 'https://picsum.photos/200/301', alt: 'Imagen 2' },
    { src: 'https://picsum.photos/200/302', alt: 'Imagen 3' }
  ];

  constructor() { }
}
