export class PlanSubscription {
  id:number;
  name:string;
  description:string;
  urlToImage:string;
  price:number;

  constructor(id: number, name: string, description: string, urlToImage: string, price: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.urlToImage = urlToImage;
    this.price = price;
  }
}
