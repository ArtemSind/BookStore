import {IBook} from "../interfaces/book";

export class BookDto implements IBook {
  constructor(author: string, img: string, name: string, price: string) {
    this.author = author;
    this.img = img;
    this.name = name;
    this.price = price;
  }

  _id?: string;
  author: string;
  img: string;
  name: string;
  price: string;
  description: string;
}
