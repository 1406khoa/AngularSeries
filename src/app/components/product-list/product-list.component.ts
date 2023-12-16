import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  constructor(private productService: ProductService){}

  products: any = []
  temp: any = 0
  currTotal: any = 0

  ngOnInit(){
    this.products = this.productService.getProduct()
  }

  buy(product: any){
   this.temp = this.productService.buy(product);
  }

  buyAll(product: any){
    this.productService.buyAll(product)
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id)
    this.products = this.productService.getProduct()
  }


}
