import { Component, Input, OnInit, AfterViewChecked, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '@app/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, AfterViewChecked, OnDestroy {
  @Input()
  submitForm: Observable<string>;
  subscription: Subscription;
  form: FormGroup;
  @Input()
  sizes: [string];
  @Input()
  colors: [{ name: string; code: number }];
  @Input()
  product: Product;
  @Input()
  postfix: string;
  @Output()
  addToCart = new EventEmitter();
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [''],
      color: [''],
      size: [''],
      quantity: [''],
      price: ['']
    });
  }

  ngOnInit() {
    this.form.controls.quantity.setValue(1);
    this.subscription = this.submitForm.subscribe(value => {
      if (this.postfix === value) {
        // check if this is exactly current form was submitted
        this.addToCart.emit(this.form.value);
      }
    });
  }
  ngAfterViewChecked() {
    if (this.product) {
      this.form.controls.price.setValue(this.product.price);
      this.form.controls.id.setValue(this.product.id);
    }
    if (this.colors) {
      this.form.controls.color.setValue(this.colors[0]);
    }
    if (this.sizes) {
      this.form.controls.size.setValue(this.sizes[0]);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
