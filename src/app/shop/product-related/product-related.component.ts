import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@app/models/product';
import { Observable } from 'rxjs';
import { Store } from 'store';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-related',
  templateUrl: './product-related.component.html',
  styleUrls: ['./product-related.component.scss']
})
export class ProductRelatedComponent implements OnInit {
  @Input()
  product: Product;
  related$: Observable<Product[]>;
  constructor(private store: Store) {}

  ngOnInit() {
    this.related$ = this.store.select('products').pipe(
      filter(Boolean),
      map((item: Product[]) =>
        item
          .filter((product: Product) => {
            return product.category === this.product.category && product.id !== this.product.id;
          })
          .splice(0, 2)
      )
    );
  }
}
