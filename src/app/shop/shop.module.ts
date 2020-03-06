import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from '@app/shop/shop-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ShopComponent, ProductsListComponent, ProductComponent],
  imports: [CommonModule, ShopRoutingModule]
})
export class ShopModule {}
