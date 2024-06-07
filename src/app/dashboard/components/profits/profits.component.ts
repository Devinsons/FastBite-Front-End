import {Component, OnInit} from '@angular/core';
import {Costo, Serie} from "../../model/costo.entity";

@Component({
  selector: 'app-profits',
  templateUrl: './profits.component.html',
  styleUrl: './profits.component.css'
})
export class ProfitsComponent implements OnInit{
  costos: Costo[]=[];

  ngOnInit() {
    console.log("Iniciando la plataforma costos");
    this.getAllCostos();
  }

  getAllCostos() {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
    this.costos = meses.map(mes => {
      return new Costo(mes, [
        new Serie('ganancias', Math.floor(Math.random() * 1000)),
        new Serie('costos', Math.floor(Math.random() * 1000))
      ]);
    });
    console.log(this.costos);
  }

  view: [number,number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Meses';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Soles';
  legendTitle: string = 'Legend';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

}
