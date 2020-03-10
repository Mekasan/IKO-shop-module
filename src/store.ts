import { pluck, distinctUntilChanged } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '@app/models/product';
import { ShopCart } from '@app/models/shop-cart';

export interface State {
  products: Product[];
  shopCart: ShopCart[];
  [key: string]: any;
}

const state: State = {
  products: undefined,
  shopCart: undefined
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  // tslint:disable-next-line:no-shadowed-variable
  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
