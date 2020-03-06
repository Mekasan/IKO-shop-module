import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@app/core';
import { Observable } from 'rxjs';
import { Product } from '@app/models/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.products$;
  }
}
