import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from '@app/shop/shop-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgbCarouselModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [ShopComponent, ProductsListComponent, ProductComponent, ProductDetailsComponent, ProductFormComponent],
  imports: [CommonModule, ShopRoutingModule, NgbCarouselModule, ReactiveFormsModule, NgbCollapseModule]
})
export class ShopModule {}
