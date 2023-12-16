import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input({alias: "sanpham"}) product: any

  @Output() onBuy = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onBuyAll = new EventEmitter();

  buy(){
    this.onBuy.emit(this.product)
  }

  buyAll(){
    this.onBuyAll.emit(this.product)
  }

  deleteProduct(){
    this.onDelete.emit(this.product.id)
  }

}
