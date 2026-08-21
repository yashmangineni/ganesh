import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  showQrModal = false;
  scanning = false;
  videoStream: MediaStream | null = null;
  scannedResult: string | null = null;

  paymentUrl =
    'upi://pay?pa=9989101941-2@axl&pn=BALA GANESH YOUTH HOUSING BOARD &cu=INR';

  heroImages = ['assets/balaganesh.png','assets/balaganesh.png' ];
  currentHeroImage = this.heroImages[0];

  constructor(private meta: Meta, private route: ActivatedRoute) {}

  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: 'BALA GANESH YOUTH HOUSING BOARD | Vinayaka Chavitihi Festival Housing Board Guntur' });
    this.meta.updateTag({ name: 'description', content: 'BALA GANESH YOUTH HOUSING BOARD at Housing Board Guntur (APHB Guntur) celebrates the auspicious Vinayaka Chavitihi (Ganesh Chaturthi) festival with devotion, joy, and community spirit. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Join our yearly celebrations, photo galleries, and festival updates.' });
    this.meta.updateTag({ property: 'og:title', content: 'BALA GANESH YOUTH HOUSING BOARD | Vinayaka Chavitihi Festival Housing Board Guntur' });
    this.meta.updateTag({ property: 'og:description', content: 'BALA GANESH YOUTH HOUSING BOARD at Housing Board Guntur (APHB Guntur) celebrates the auspicious Vinayaka Chavitihi (Ganesh Chaturthi) festival with devotion, joy, and community spirit. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Join our yearly celebrations, photo galleries, and festival updates.' });
    this.meta.updateTag({ property: 'og:url', content: 'http://balaganeshyouthguntur.duckdns.org/' });
    this.meta.updateTag({ property: 'og:image', content: 'https://balaganeshyouthguntur.duckdns.org/assets/balaganesh.png' });
    this.meta.updateTag({ property: 'twitter:title', content: 'BALA GANESH YOUTH HOUSING BOARD | Vinayaka Chavitihi Festival Housing Board Guntur' });
    this.meta.updateTag({ property: 'twitter:description', content: 'BALA GANESH YOUTH HOUSING BOARD at Housing Board Guntur (APHB Guntur) celebrates the auspicious Vinayaka Chavitihi (Ganesh Chaturthi) festival with devotion, joy, and community spirit. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Join our yearly celebrations, photo galleries, and festival updates.' });
    this.meta.updateTag({ property: 'twitter:image', content: 'https://balaganeshyouthguntur.duckdns.org/assets/balaganesh.png' });
    // ensure home page starts at top when opened
    try { window.scrollTo(0,0); } catch (e) {}

    // handle fragments like #seva or #committee to open/scroll to sections
    this.route.fragment.subscribe(fragment => {
      if (!fragment) return;
      setTimeout(() => {
        if (fragment === 'seva') {
          const el = document.getElementById('seva-section');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
    });
  }

  toggleHeroImage() {
    const currentIndex = this.heroImages.indexOf(this.currentHeroImage);
    const nextIndex = (currentIndex + 1) % this.heroImages.length;
    this.currentHeroImage = this.heroImages[nextIndex];
  }

 pay() {
  window.open(this.paymentUrl, '_self');
}

openQrModal(startScan = false) {
  this.showQrModal = true;
  if (startScan) {
    this.startScanner();
  }
}

closeQrModal() {
  this.showQrModal = false;
  this.stopScanner();
}

async startScanner() {
  if (this.scanning) return;
  try {
    this.videoStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    this.scanning = true;
    setTimeout(() => {
      if (this.videoElement && this.videoElement.nativeElement) {
        this.videoElement.nativeElement.srcObject = this.videoStream as MediaStream;
        this.videoElement.nativeElement.play();
      }
    }, 100);
  } catch (err) {
    console.error('Camera access denied or not available', err);
  }
}

stopScanner() {
  this.scanning = false;
  if (this.videoStream) {
    this.videoStream.getTracks().forEach(t => t.stop());
    this.videoStream = null;
  }
  if (this.videoElement && this.videoElement.nativeElement) {
    try { this.videoElement.nativeElement.pause(); } catch {}
    try { this.videoElement.nativeElement.srcObject = null; } catch {}
  }
}
}
