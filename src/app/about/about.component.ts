import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  showCommitteeMembers: boolean = false;

  committeeMembers = [
    { name: 'K Chandra Mouli' },
    { name: 'B Ashok' },
    { name: 'D Sri Hari' },
    { name: 'P Vivek' },
    { name: 'B Balaji' },
    { name: 'G Sunny' },
    { name: 'M Bhanu' },
    { name: 'D Gowtham' },
    { name: 'H Praveen' },
    { name: 'P Rahul' },
    { name: 'Barath' },
    { name: 'Yaswanth' },
    { name: 'Prudhvi' },
    { name: 'Narendhra' },
    { name: 'G Prabhakar' },
    { name: 'P Bhargav' },
    { name: 'Dinesh' },
    { name: 'Chinnu' },
    { name: 'Surendra' },
    { name: 'Chaitanya' },
    { name: 'Lokesh' },
    { name: 'Nikendra' }
  ];

  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'title', content: 'About Bala Ganesh Youth | Guntur' });
    this.meta.updateTag({ name: 'description', content: 'Learn about Bala Ganesh Youth Housing Board Colony and our Ganesh Utsav celebrations in Guntur.' });
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  toggleCommitteeMembers(): void {
    this.showCommitteeMembers = !this.showCommitteeMembers;
  }
}
