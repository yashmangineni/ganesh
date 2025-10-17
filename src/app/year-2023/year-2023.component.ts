import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-year-2023',
  templateUrl: './year-2023.component.html',
  styleUrls: ['./year-2023.component.css']
})
export class Year2023Component implements OnInit {
  
  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: 'Bala Ganesh Youth Community 2023 | Festival Memories & Gallery Housing Board Guntur' });
    this.meta.updateTag({ name: 'description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2023 Vinayaka Chavitihi Festival. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Browse through the cherished memories through our photo gallery, video collection, and event highlights from the grand celebration.' });
    this.meta.updateTag({ property: 'og:title', content: 'Bala Ganesh Youth Community 2023 | Festival Memories & Gallery Housing Board Guntur' });
    this.meta.updateTag({ property: 'og:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2023 Vinayaka Chavitihi Festival. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Browse through the cherished memories through our photo gallery, video collection, and event highlights from the grand celebration.' });
    this.meta.updateTag({ property: 'og:url', content: 'http://balaganeshyouthguntur.duckdns.org/2023' });
    this.meta.updateTag({ property: 'og:image', content: 'https://ganesh-rho.vercel.app/assets/2023(2).jpg' });
    this.meta.updateTag({ property: 'twitter:title', content: 'Bala Ganesh Youth Community 2023 | Festival Memories & Gallery Housing Board Guntur' });
    this.meta.updateTag({ property: 'twitter:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2023 Vinayaka Chavitihi Festival. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Browse through the cherished memories through our photo gallery, video collection, and event highlights from the grand celebration.' });
    this.meta.updateTag({ property: 'twitter:image', content: 'https://ganesh-rho.vercel.app/assets/2023(2).jpg' });
  }

photos = [
    {
      src: 'assets/2023(2).jpg',
      alt: 'Ganesha idol',
      title: 'Main Ganesha Idol',
      description: 'Beautiful decorated main idol for 2023'
    },
    {
      src: 'assets/2023(3).jpg',
      alt: 'Festival decoration',
      title: 'Festival Decorations',
      description: 'Colorful decorations and lights'
    },
    {
      src: 'assets/2023(4).jpg',
      alt: 'Prayers',
      title: 'Prayer Ceremony',
      description: 'Community prayers and rituals'
    }
  ];

  videos = [
    {
      src: 'assets/23.mp4',
      title: 'Ganesha Sthapana 2023',
      description: 'The installation ceremony of Lord Ganesha'
    },
    {
      src: 'assets/2222.mp4',
      title: 'Ganesha Sthapana 2023',
      description: 'The installation ceremony of Lord Ganesha'
    }
  ];

  teamMembers: any[] = [];
}
