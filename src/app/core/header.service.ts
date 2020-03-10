import { Injectable } from '@angular/core';

/**
 * Provides a Header title depend on route.
 */
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor() {}

  /**
   *  Get Header Tittle
   *  @return string header title
   */
  async HeaderTitle(url: string) {
    const separated = url.split('/').filter((item: string) => item !== '');
    if (separated.includes('product') && separated.includes('shop')) {
      return 'product';
    } else if (separated.includes('shop')) {
      return 'shop';
    } else {
      return false;
    }
  }
}
