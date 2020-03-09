import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ShopComponent } from '@app/shop/shop.component';
import { ProductDetailsComponent } from '@app/shop/product-details/product-details.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'shop', component: ShopComponent, data: { title: extract('Shop') } },
    { path: 'product/:id', component: ProductDetailsComponent, data: { title: extract('Shop') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ShopRoutingModule {}
