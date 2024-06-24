
export class Product{
  id: number;
  name: string;
  description: string;
  image: string;
  type: string;
  quantity:number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.image = '';
    this.type = '';
    this.quantity=0;
  }
}

