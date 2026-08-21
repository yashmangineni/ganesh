import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'title', content: 'Privacy Policy | Bala Ganesh Youth' });
    this.meta.updateTag({ name: 'description', content: 'Privacy Policy for Bala Ganesh Youth Housing Board Colony, Guntur.' });
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }
}
