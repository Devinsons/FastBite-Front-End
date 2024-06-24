import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ImageService} from "../../../shared/services/image.service";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrl: './products-add.component.css'
})
export class ProductsAddComponent implements OnInit {
  addedProductForm: FormGroup;
  images: any[] = [];
  selectedImage: string = '';

  restaurantId: string = 'your-restaurant-id'; // Set this according to your logic

  constructor(
    private fb: FormBuilder,
    private imageService: ImageService,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.addedProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      image: ['', Validators.required]
    });
    this.restaurantId = localStorage.getItem('acmeRestaurantRecordId') || '';
  }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
    this.imageService.getImages().subscribe(
      (data) => {
        this.images = data;
      },
      (error) => {
        console.error('Error al cargar las imágenes', error);
      }
    );
  }

  addProduct() {
    if (this.addedProductForm.valid) {
      const formData = this.addedProductForm.value;
      formData.image = this.selectedImage; // Set the selected image URL

      this.productService.createProduct(this.restaurantId, formData)
        .subscribe(
          response => {
            this.snackBar.open('Producto añadido con éxito', 'Cerrar', {
              duration: 3000
            });
            this.router.navigate(['/home']); // Redirigir a otra página después de añadir el producto
          },
          error => {
            console.error('Error al añadir el producto', error);
            this.snackBar.open('Error al añadir el producto', 'Cerrar', {
              duration: 3000
            });
          }
        );
    }
  }
}
