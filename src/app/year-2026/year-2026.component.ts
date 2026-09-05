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
    // ensure page starts at top when opened via router
    try { window.scrollTo(0,0); } catch (e) {}
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
  {
    day: 'Day 1',
    date: 'September 14, 2026',
    title: '🙏 Ganesh Pooja & Auspicious Commencement',
    details:
      'The celebrations will begin with a traditional Ganesh Pooja, seeking the divine blessings of Lord Ganesha for a joyful and successful Ganesh Utsav.'
  },
  {
    day: 'Day 2',
    date: 'September 15, 2026',
    title: '💃 Cultural Evening – Dance & Music',
    details:
      'An entertaining cultural evening featuring vibrant dance performances, melodious music and engaging programs presented by our talented participants.'
  },
  {
    day: 'Day 3',
    date: 'September 16, 2026',
    title: '🌸 Traditional Kollatam',
    details:
      'Experience the beauty of our traditional culture through a special Kollatam performance, bringing together rhythm, tradition and community spirit.'
  },
  {
    day: 'Day 4',
    date: 'September 17, 2026',
    title: '🎭 Grand Cultural Programs',
    details:
      'A special cultural celebration featuring a variety of traditional and contemporary performances, showcasing the creativity and talent of our community.'
  },
  {
    day: 'Day 5',
    date: 'September 18, 2026',
    title: '🍚 Annadanam – Community Lunch',
    details:
      'Join us in the afternoon for Annadanam, followed by a community lunch. Everyone is warmly invited to share this special meal and celebrate togetherness.'
  },
  {
    day: 'Day 6',
    date: 'September 19, 2026',
    title: '🍬 Laddu Pata & Grand Ganesh Nimajjanam',
    details:
      'The Laddu Pata celebrations will begin at 3:00 PM, followed by the grand Ganesh Nimajjanam. We warmly invite all devotees, friends, families and well-wishers to gather together and join us in the farewell procession of Lord Ganesha.'
  }
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
