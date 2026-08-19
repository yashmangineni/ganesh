import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Vinayaka Chavitihi Festival';
  isMobileMenuOpen = false;
  showWelcomePopup = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
  }

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

  closeWelcomePopup(): void {
    this.showWelcomePopup = false;
  }
}
