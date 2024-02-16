export class MovieModel {
  id: string;

  title: string;

  price: number;

  image: string;

  constructor(data: { [key: string]: any }) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.image = data.image;
  }
}
