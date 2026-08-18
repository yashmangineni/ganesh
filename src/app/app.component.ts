import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vinayaka Chavitihi Festival';
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  navigateHome(): void {
    // navigate to root then ensure page is at top
    try {
      this.router.navigate(['/']).finally(() => {
        try { window.scrollTo(0, 0); } catch (e) {}
      });
    } catch (e) {
      try { window.scrollTo(0, 0); } catch (e) {}
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
