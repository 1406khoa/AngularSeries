import { routes } from './../../app.routes';
import { Component, EventEmitter, Output } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  constructor(
    private productService: ProductService,
    private activatedRouter: ActivatedRoute,
    private route: Router
    ) { }


  product: any = {}

  ngOnInit() {

    const {id} = this.activatedRouter.snapshot.params
    this.product = this.productService.getProductById(id)
  }


  backToMain(){
    this.route.navigate(["/products"])
  }


}
