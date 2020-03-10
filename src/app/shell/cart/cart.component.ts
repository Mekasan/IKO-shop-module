import { Component, Input } from '@angular/core';
import { ShopCart } from '@app/models/shop-cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input()
  cart: ShopCart[];
}
