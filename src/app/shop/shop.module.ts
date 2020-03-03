import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from '@app/shop/shop-routing.module';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, ShopRoutingModule]
})
export class ShopModule {}
