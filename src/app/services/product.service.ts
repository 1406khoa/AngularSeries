import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = [
    {
      id: 1,
      name: 'product1',
      quantity: 3,
      price: 300,
    },

    {
      id: 2,
      name: 'product2',
      quantity: 3,
      price: 200,
    },
    {
      id: 3,
      name: 'product3',
      quantity: 3,
      price: 100,
    },
  ]

  getProduct(){
    return this.products
  }

  buyAll(product: any){
    console.log("Total: " + product.quantity * product.price)
    product.quantity = 0


  }

  buy(product: any){

      console.log('da mua san pham')
      product.quantity--
      console.log(product.quantity)
  }

  deleteProduct(id: number){
    this.products = this.products.filter((e)=> e.id !== id)
  }
}
