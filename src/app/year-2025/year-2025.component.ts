import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-year-2025',
  templateUrl: './year-2025.component.html',
  styleUrls: ['./year-2025.component.css']
})
export class Year2025Component implements OnInit {
  
  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: 'Bala Ganesh Youth Community 2025 | Vinayaka Chavitihi Festival Housing Board Guntur' });
    this.meta.updateTag({ name: 'description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2025 Vinayaka Chavitihi Festival Celebration. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Find event schedules, greetings, cultural programs, and celebration details for this auspicious Hindu festival.' });
    this.meta.updateTag({ property: 'og:title', content: 'Bala Ganesh Youth Community 2025 | Vinayaka Chavitihi Festival Housing Board Guntur' });
    this.meta.updateTag({ property: 'og:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2025 Vinayaka Chavitihi Festival Celebration. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Find event schedules, greetings, cultural programs, and celebration details for this auspicious Hindu festival.' });
    this.meta.updateTag({ property: 'og:url', content: 'http://balaganeshyouthguntur.duckdns.org/2025' });
    this.meta.updateTag({ property: 'og:image', content: 'https://images.pexels.com/photos/8686200/pexels-photo-8686200.jpeg?auto=compress&cs=tinysrgb&w=600' });
    this.meta.updateTag({ property: 'twitter:title', content: 'Bala Ganesh Youth Community 2025 | Vinayaka Chavitihi Festival Housing Board Guntur' });
    this.meta.updateTag({ property: 'twitter:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2025 Vinayaka Chavitihi Festival Celebration. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Find event schedules, greetings, cultural programs, and celebration details for this auspicious Hindu festival.' });
    this.meta.updateTag({ property: 'twitter:image', content: 'https://images.pexels.com/photos/8686200/pexels-photo-8686200.jpeg?auto=compress&cs=tinysrgb&w=600' });
    // ensure page starts at top when opened via router
    try { window.scrollTo(0,0); } catch (e) {}
  }

  photos = [
    {
      src: 'assets/placeholder.jpg',
      alt: 'Ganesha 2025',
      title: 'Photos Coming Soon',
      description: 'Festival photos will be uploaded soon'
    },
    {
      src: 'assets/placeholder.jpg',
      alt: 'Festival 2025',
      title: 'Celebration Moments',
      description: 'Community celebration memories'
    },
    {
      src: 'assets/placeholder.jpg',
      alt: 'Decorations 2025',
      title: 'Festival Decorations',
      description: 'Beautiful festival decorations'
    }
  ];

  videos = [
    {
      src: 'assets/placeholder.mp4',
      title: 'Celebration 2025',
      description: 'Festival celebration video coming soon'
    },
    {
      src: 'assets/placeholder.mp4',
      title: 'Rituals & Ceremonies',
      description: 'Traditional rituals video'
    }
  ];

}
