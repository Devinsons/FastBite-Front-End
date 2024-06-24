import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from "../../services/restaurants.service";
import {Product} from "../../model/product.entity";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../../../execution/model/order.entity";
import {ExecutionService} from "../../../execution/services/execution.service";
import {ProductService} from "../../services/product.service";
import {IProduct} from "../../model/IProduct";
import {CartService} from "../../services/cart.service";
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent implements  OnInit{
  entradas: Product[] = [];
  segundos: Product[] = [];
  bebidas: Product[] = [];
  idOrder: number = 4;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private orderService: ExecutionService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    console.log('Iniciando la plataforma menu-list');
    const id = this.route.snapshot.params['restaurantId'];
    this.getProductsByRestaurantId(id);
  }

  getProductsByRestaurantId(restaurantId: string) {
    this.productService.getProductsByRestaurantId(restaurantId).subscribe((products: Product[]) => {
      this.entradas = products.filter(product => product.type === 'ENTRADA');
      this.segundos = products.filter(product => product.type === 'ALMUERZO');
      this.bebidas = products.filter(product => product.type === 'BEBIDA');
      console.log('Entradas', this.entradas);
      console.log('Segundos', this.segundos);
      console.log('Bebidas', this.bebidas);
    });
  }

  onCardClick(product: IProduct) {
    this.cartService.addNewProduct(product);
  }
}
