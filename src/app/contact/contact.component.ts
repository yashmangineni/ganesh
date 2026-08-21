import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form = { name: '', phone: '', message: '' };
  readonly whatsappNumber = '919989101941'; // Replace with the actual WhatsApp number

  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'title', content: 'Contact Bala Ganesh Youth | Guntur' });
    this.meta.updateTag({ name: 'description', content: 'Get in touch with Bala Ganesh Youth in Housing Board Colony, Guntur.' });
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  sendToAdminWhatsApp(): void {
    const text = [
      'Hello Bala Ganesh Youth,',
      '',
      `Name: ${this.form.name}`,
      `Phone: ${this.form.phone}`,
      `Message: ${this.form.message}`
    ].join('\n');

    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  }
}
