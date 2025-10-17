import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-year-2024',
  templateUrl: './year-2024.component.html',
  styleUrls: ['./year-2024.component.css']
})
export class Year2024Component implements OnInit {
  
  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: 'Bala Ganesh Youth Community 2024 | Photos & Videos Gallery Housing Board Guntur' });
    this.meta.updateTag({ name: 'description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2024 Vinayaka Chavitihi Festival. Relive the memorable moments through our photo gallery, video collection, and event highlights from the grand celebration.' });
    this.meta.updateTag({ property: 'og:title', content: 'Bala Ganesh Youth Community 2024 | Photos & Videos Gallery Housing Board Guntur' });
    this.meta.updateTag({ property: 'og:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2024 Vinayaka Chavitihi Festival. Relive the memorable moments through our photo gallery, video collection, and event highlights from the grand celebration.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://ganesh-rho.vercel.app/2024' });
    this.meta.updateTag({ property: 'og:image', content: 'https://ganesh-rho.vercel.app/assets/2024.jpg' });
    this.meta.updateTag({ property: 'twitter:title', content: 'Bala Ganesh Youth Community 2024 | Photos & Videos Gallery Housing Board Guntur' });
    this.meta.updateTag({ property: 'twitter:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2024 Vinayaka Chavitihi Festival. Relive the memorable moments through our photo gallery, video collection, and event highlights from the grand celebration.' });
    this.meta.updateTag({ property: 'twitter:image', content: 'https://ganesh-rho.vercel.app/assets/2024.jpg' });
  }

photos = [
    {
      src: 'assets/2024.jpg',
      alt: 'Ganesha 2024',
      title: 'Grand Ganesha 2024',
      description: 'Magnificent Ganesha idol for 2024'
    },
    {
      src: 'assets/2024(1).jpg',
      alt: 'Festival preparations',
      title: 'Festival Preparations',
      description: 'Elaborate preparations for the festival'
    },
    {
      src: 'assets/24.jpg',
      alt: 'Community gathering',
      title: 'Community Gathering',
      description: 'Large community participation'
    },
    {
      src: 'assets/24(1).jpg',
      alt: 'Traditional rituals',
      title: 'Traditional Rituals',
      description: 'Sacred rituals and ceremonies'
    }
  ];

  videos = [
    {
      src: 'assets/video24.mp4',
      title: 'Ganesha Arrival 2024',
      description: 'The grand arrival of Lord Ganesha'
    },
    {
      src: 'assets/v24.mp4',
      title: 'Ganesha Arrival 2024',
      description: 'The grand arrival of Lord Ganesha'
    }
  ];

  teamMembers: any[] = []; // Placeholder if you want to use team section later
}
