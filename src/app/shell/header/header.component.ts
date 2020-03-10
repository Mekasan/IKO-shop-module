import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService, CredentialsService, I18nService } from '@app/core';
import { Observable, Subscription } from 'rxjs';
import { ShopCart } from '@app/models/shop-cart';
import { Store } from 'store';
import { HeaderService } from '@app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  menuHidden = true;
  cart$: Observable<ShopCart[]>;
  subscription: Subscription;
  HeaderTitle: any;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private i18nService: I18nService,
    private route: ActivatedRoute,
    private store: Store,
    private headerService: HeaderService
  ) {
    router.events.subscribe(async (val: any) => {
      if (val && val.url) {
        this.HeaderTitle = await headerService.HeaderTitle(val.url);
      }
    });
  }

  ngOnInit() {
    this.cart$ = this.store.select('shopCart');
    this.subscription = this.cart$.subscribe();
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
