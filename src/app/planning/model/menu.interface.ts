export interface Imenu {
  id:           number;
  entradas:     Item[];
  segundo:      Item[];
  bebidas:      Item[];
  restaurantId: number;
}

export interface Item {
  id:         number;
  name:       string;
  category:   Category;
  stock:      number;
  urlToImage: string;
}

export enum Category {
  Normal = "Normal",
  Saludable = "Saludable",
}
