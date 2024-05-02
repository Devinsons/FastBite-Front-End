export interface Iorder {
  id:            number;
  name:          string;
  type:          string;
  tiempoEntrega: string;
  state:         string;
  fecha:         Date;
  restaurantId:  number;
  userId:        number;
}

