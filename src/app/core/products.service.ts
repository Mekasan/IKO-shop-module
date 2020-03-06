import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Store } from 'store';
import { map, tap } from 'rxjs/operators';
import { Product } from '@app/models/product';
import { Observable } from 'rxjs';

/**
 * Provides a base crud for products.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  model = 'products';

  products$: Observable<Product[]> = this.getProducts().pipe(
    tap(products => {
      this.store.set('products', products);
    })
  );
  constructor(private http: HttpClient, private store: Store) {}

  /**
   *  Get Url
   *  @return api endpoint url to products model
   */
  getUrl() {
    return `${environment.apiEndpoint}/${this.model}`;
  }
  /**
   *  Get products
   *  @return array of products
   */
  getProducts() {
    return this.http.get<Product[]>(this.getUrl()).pipe(map(res => res));
  }
}
