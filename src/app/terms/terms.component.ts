import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'title', content: 'Terms & Conditions | Team Shivaputra Youth' });
    this.meta.updateTag({ name: 'description', content: 'Terms and Conditions for using the Team Shivaputra Youth website.' });
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }
}
