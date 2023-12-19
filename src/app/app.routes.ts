import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: "products",
    component: ProductListComponent
  },

  {
    path: "products/:id",
    component: NavBarComponent
  },

  {
    path: "**",
    component: NotFoundComponent
  }

];
