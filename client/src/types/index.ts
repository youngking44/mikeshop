export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  brand: string;
  category: string;
  color: [string];
  createdAt: Date;
  desc: string;
  img: string;
  price: number;
  title: string;
  updatedAt: Date;
  _id: string;
}

//I omitted the color array of strings property and then override it with string
export interface CartItem extends Omit<Product, "color"> {
  color: string;
  quantity: number;
}
