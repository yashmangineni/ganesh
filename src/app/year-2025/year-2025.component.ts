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
    this.meta.updateTag({ name: 'description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2025 Vinayaka Chavitihi Festival Celebration. Find event schedules, greetings, cultural programs, and celebration details for this auspicious Hindu festival.' });
    this.meta.updateTag({ property: 'og:title', content: 'Bala Ganesh Youth Community 2025 | Vinayaka Chavitihi Festival Housing Board Guntur' });
    this.meta.updateTag({ property: 'og:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2025 Vinayaka Chavitihi Festival Celebration. Find event schedules, greetings, cultural programs, and celebration details for this auspicious Hindu festival.' });
    this.meta.updateTag({ property: 'og:url', content: 'http://balaganeshyouthguntur.duckdns.org/2025' });
    this.meta.updateTag({ property: 'og:image', content: 'https://images.pexels.com/photos/8686200/pexels-photo-8686200.jpeg?auto=compress&cs=tinysrgb&w=600' });
    this.meta.updateTag({ property: 'twitter:title', content: 'Bala Ganesh Youth Community 2025 | Vinayaka Chavitihi Festival Housing Board Guntur' });
    this.meta.updateTag({ property: 'twitter:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2025 Vinayaka Chavitihi Festival Celebration. Find event schedules, greetings, cultural programs, and celebration details for this auspicious Hindu festival.' });
    this.meta.updateTag({ property: 'twitter:image', content: 'https://images.pexels.com/photos/8686200/pexels-photo-8686200.jpeg?auto=compress&cs=tinysrgb&w=600' });
  }

 greetings = [
    {
      icon: '🎊',
      title: 'Happy Vinayaka Chavitihi',
      message: 'May Lord Ganesha bless you with happiness, success, and prosperity in all your endeavors.'
    },
    {
      icon: '🙏',
      title: 'Divine Blessings',
      message: 'May the divine light of Lord Ganesha illuminate your path and remove all obstacles from your life.'
    },
    {
      icon: '✨',
      title: 'New Beginnings',
      message: 'As we welcome Lord Ganesha, may this festival mark the beginning of new opportunities and success.'
    },
    {
      icon: '🎉',
      title: 'Joyful Celebrations',
      message: 'Wishing you and your family a festival filled with joy, devotion, and beautiful memories.'
    }
  ];

  celebrations = [
    {
      day: 'Day 1',
      title: 'Ganesha Sthapana',
      description: 'Grand installation of Lord Ganesha with traditional rituals and ceremonies',
      time: '6:00 AM - 10:00 AM'
    },
    {
      day: 'Day 2',
      title: 'Cultural Programs',
      description: 'Traditional dance, music, and devotional song performances',
      time: '6:00 PM - 9:00 PM'
    },
    {
      day: 'Day 3',
      title: 'Community Feast',
      description: 'Prasadam distribution and community dining for all devotees',
      time: '12:00 PM - 3:00 PM'
    },
    {
      day: 'Day 4',
      title: 'Youth Programs',
      description: 'Special programs and competitions for children and youth',
      time: '4:00 PM - 7:00 PM'
    },
    {
      day: 'Day 5',
      title: 'Visarjan Ceremony',
      description: 'Farewell ceremony with procession and immersion of Lord Ganesha',
      time: '4:00 PM - 8:00 PM'
    }
  ];

}
