import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: 'Bala Ganesh Youth Community | Vinayaka Chavitihi Festival Housing Board Guntur' });
    this.meta.updateTag({ name: 'description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) celebrates the auspicious Vinayaka Chavitihi (Ganesh Chaturthi) festival with devotion, joy, and community spirit. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Join our yearly celebrations, photo galleries, and festival updates.' });
    this.meta.updateTag({ property: 'og:title', content: 'Bala Ganesh Youth Community | Vinayaka Chavitihi Festival Housing Board Guntur' });
    this.meta.updateTag({ property: 'og:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) celebrates the auspicious Vinayaka Chavitihi (Ganesh Chaturthi) festival with devotion, joy, and community spirit. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Join our yearly celebrations, photo galleries, and festival updates.' });
    this.meta.updateTag({ property: 'og:url', content: 'http://balaganeshyouthguntur.duckdns.org/' });
    this.meta.updateTag({ property: 'og:image', content: 'https://ganesh-rho.vercel.app/assets/l.jpg' });
    this.meta.updateTag({ property: 'twitter:title', content: 'Bala Ganesh Youth Community | Vinayaka Chavitihi Festival Housing Board Guntur' });
    this.meta.updateTag({ property: 'twitter:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) celebrates the auspicious Vinayaka Chavitihi (Ganesh Chaturthi) festival with devotion, joy, and community spirit. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Join our yearly celebrations, photo galleries, and festival updates.' });
    this.meta.updateTag({ property: 'twitter:image', content: 'https://ganesh-rho.vercel.app/assets/l.jpg' });
  }

 showCommitteeMembers = false;

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
    { name: 'J Sai Ganesh' },
    { name: 'J Anji' },
    { name: 'Munna' },
    { name: 'Yasain' },
    { name: 'Yaswanth' },
    { name: 'Prudhvi' },
    { name: 'Narendhra' },
    { name: 'G Prabhakar' },
    { name: 'P Bhargav' },
  ];

  toggleCommitteeMembers() {
    this.showCommitteeMembers = !this.showCommitteeMembers;
  }
}
