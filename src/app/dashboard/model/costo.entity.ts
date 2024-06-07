export class Costo {
  constructor(name: string, series: Serie[]) {
    this.name = name;
    this.series = series;
  }
  name: string;
  series: Serie[];
}

export class Serie {
  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
  name: string;
  value: number;
}
