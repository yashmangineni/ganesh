import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-year-2026',
  templateUrl: './year-2026.component.html',
  styleUrls: ['./year-2026.component.css']
})
export class Year2026Component implements OnInit {

  constructor(private meta: Meta) {}

  // show greetings and schedule by default when opening page
  showGreetings = true;
  uploadedQrImage = 'assets/qrcode.jpeg';
  useUploadedQrImage = true;

  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: 'Bala Ganesh Youth Community 2026 | Invitation & Greetings' });
    this.meta.updateTag({ name: 'description', content: 'Invitation and greetings for Bala Ganesh Youth Community 2026. Upcoming event details and invitation messages.' });
    this.meta.updateTag({ property: 'og:title', content: 'Bala Ganesh Youth Community 2026 | Invitation & Greetings' });
    this.meta.updateTag({ property: 'og:description', content: 'Invitation and greetings for Bala Ganesh Youth Community 2026. Upcoming event details and invitation messages.' });
    this.meta.updateTag({ property: 'og:url', content: 'http://balaganeshyouthguntur.duckdns.org/2026' });
    this.meta.updateTag({ property: 'og:image', content: 'https://images.pexels.com/photos/8686200/pexels-photo-8686200.jpeg?auto=compress&cs=tinysrgb&w=600' });
    this.meta.updateTag({ property: 'twitter:title', content: 'Bala Ganesh Youth Community 2026 | Invitation & Greetings' });
    this.meta.updateTag({ property: 'twitter:description', content: 'Invitation and greetings for Bala Ganesh Youth Community 2026. Upcoming event details and invitation messages.' });
    this.meta.updateTag({ property: 'twitter:image', content: 'https://images.pexels.com/photos/8686200/pexels-photo-8686200.jpeg?auto=compress&cs=tinysrgb&w=600' });
  }

  greetings = [
    {
      icon: '🎊',
      title: 'Happy Vinayaka Chavitihi 2026',
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
    },
    {
      icon: '🤝',
      title: 'To All Friends',
      message: 'To all our friends near and far — may Lord Ganesha bless your homes with happiness and success.'
    },
    {
      icon: '👪',
      title: 'To Family',
      message: 'Warm wishes to every family — may your bonds grow stronger and your days be full of love.'
    },
    {
      icon: '🏘️',
      title: 'Community Wishes',
      message: 'Together we celebrate — may our community flourish and support one another always.'
    },
    {
      icon: '🙏',
      title: 'Blessings to All Households',
      message: 'Blessings to every home — health, prosperity, and peace be with you this festival season.'
    }
  ];
  // 5-day celebration schedule (editable in code or later via admin UI)
  // schedule dates set to Sep 14–18, 2026
  schedule = [
    { day: 'Day 1', date: 'Sep 14, 2026', title: 'Inauguration & Pranapratishtha', details: 'Inauguration, devotional singing, and welcome rituals.' },
    { day: 'Day 2', date: 'Sep 15, 2026', title: 'Cultural Programs', details: 'Dance and music performances by the community.' },
    { day: 'Day 3', date: 'Sep 16, 2026', title: 'Community Feast', details: 'Community meal and social gatherings.' },
    { day: 'Day 4', date: 'Sep 17, 2026', title: 'Procession', details: 'Street procession and devotional activities.' },
    { day: 'Day 5', date: 'Sep 18, 2026', title: 'Nimarjanam & Farewell', details: 'Final rituals and immersion ceremony.' }
  ];

  // Replace with your actual UPI ID
paymentUrl =
  'upi://pay?pa=9989101941-2@axl&pn=Bala Ganesh Youth Community&cu=INR';

// Open PhonePe / Google Pay / Paytm
pay() {
  window.location.href = this.paymentUrl;
}

handleUploadedQrError() {
  this.useUploadedQrImage = false;
}

getQrSrc(): string {
  return 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=' +
    encodeURIComponent(this.paymentUrl);
}
}
