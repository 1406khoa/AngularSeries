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
      description: "this is product 1..."
    },

    {
      id: 2,
      name: 'product2',
      quantity: 3,
      price: 200,
      description: "this is product 1..."
    },
    {
      id: 3,
      name: 'product3',
      quantity: 3,
      price: 100,
      description: "this is product 1..."
    },
  ]

  getProduct(){
    return this.products
  }



  getProductById(id : number | string){
    if( typeof id === 'string' ){
      id  = parseInt(id)
    }

    const product = this.products.find((product)=> product.id === id)
    return product || {}
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
