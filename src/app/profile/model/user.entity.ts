export class User {
  id:number;
  name:string;
  email:string;
  schedule:string;
  address:string;
  urlToImage:string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.email = "";
    this.schedule = "";
    this.address = "";
    this.urlToImage = "";
  }
}
