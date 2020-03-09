import { Component, OnInit, ViewChild, AfterViewChecked, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { Product } from '@app/models/product';
import { Store } from 'store';
import { filter, map } from 'rxjs/operators';
import { ProductsService } from '@app/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ProductDetailsComponent implements OnInit, AfterViewChecked, OnDestroy {
  selected$: Observable<Product>;
  showNavigationArrows = true;
  showNavigationIndicators = true;
  descCollapsed = false;
  detCollapsed = false;
  sizes = ['L', 'M'];
  colors = [
    { name: 'Blue', code: 26 },
    { name: 'Brow', code: 21 }
  ];
  subscription: Subscription;
  addProduct: Subject<string> = new Subject<string>();
  @ViewChild('carousel', { static: false }) carousel: NgbCarousel;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private config: NgbCarouselConfig
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.subscription = this.productsService.products$.subscribe();
    this.route.params.subscribe((params: Params) => {
      this.selected$ = this.store.select('products').pipe(
        filter(Boolean),
        map((item: Product[]) => item.filter((product: Product) => product.id === params.id)[0])
      );
    });
  }
  ngAfterViewChecked() {
    if (this.carousel) {
      this.carousel.pause();
    }
  }
  addedToCart(value: any) {
    this.addProduct.next(value);
  }
  addToCart(event: any) {
    console.log('event', event);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
