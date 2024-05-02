export class User {
  id:number;
  name:string;
  lastName:string;
  email:string;
  phone:string;
  address:string;
  urlToImage:string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.lastName = "";
    this.email = "";
    this.phone = "";
    this.address = "";
    this.urlToImage = "";
  }
}
