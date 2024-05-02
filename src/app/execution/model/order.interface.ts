export interface Iorder {
  id:            number;
  entradas:      Parametro[];
  segundo:       Parametro[];
  bebidas:       Parametro[];
  tiempoEntrega: string;
  state:         string;
  fecha:         Date;
  restaurantId:  number;
  userId:        number;
}

export interface Parametro {
  id:       number;
  name:     string;
  quantity: number;
}
