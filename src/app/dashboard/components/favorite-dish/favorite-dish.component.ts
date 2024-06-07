import {Component, OnInit} from '@angular/core';
import {Plato} from "../../model/plato.entity";
import {Router} from "@angular/router";
import {DashboardService} from "../../services/dashboard.service";

@Component({
  selector: 'app-favorite-dish',
  templateUrl: './favorite-dish.component.html',
  styleUrl: './favorite-dish.component.css'
})
export class FavoriteDishComponent implements OnInit{
  platos: Plato[] = [];
  constructor(private dashboardService: DashboardService, private router: Router){
  }

  ngOnInit(): void {
    console.log("Iniciando la plataforma platos");
    this.getAllPlatos();
  }

  getAllPlatos() {
    this.dashboardService.getAll().subscribe((response: any) => {
      // Obtener solo el "name" de cada "segundo"
      this.platos = response.map((platos: any) => ({
        name: platos.name,
        value: Math.floor(Math.random() * (100 - 50 + 1)) + 50
      }));
      console.log(this.platos);
    });
  }

  view: [number,number] = [800, 400];

  // opciones de gráfico de Advanced Pie
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition = 'below';

  colorScheme = {
    domain: ['#20521c', '#912338', '#6df801', '#9839c5']
  };

  onSelect(event:any) {
    console.log(event);
  }

}
