
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // =========================================
  // CONTACT FORM
  // =========================================

  form = {
    name: '',
    phone: '',
    message: ''
  };


  // =========================================
  // ADMIN WHATSAPP NUMBER
  // =========================================

  readonly whatsappNumber = '919989101941';


  // =========================================
  // CONSTRUCTOR
  // =========================================

  constructor(private meta: Meta) {

    this.meta.updateTag({
      name: 'title',
      content: 'Contact Bala Ganesh Youth | Guntur'
    });

    this.meta.updateTag({
      name: 'description',
      content:
        'Get in touch with Bala Ganesh Youth at Housing Board Colony Park, APHB Colony, Nallapadu Rural, Andhra Pradesh.'
    });

  }


  // =========================================
  // PAGE INITIALIZATION
  // =========================================

  ngOnInit(): void {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });

  }


  // =========================================
  // SEND MESSAGE TO ADMIN WHATSAPP
  // =========================================

  sendToAdminWhatsApp(): void {

    const text = [
      '🙏 Hello Bala Ganesh Youth,',
      '',
      `👤 Name: ${this.form.name}`,
      `📞 Phone: ${this.form.phone}`,
      '',
      '💬 Message:',
      this.form.message,
      '',
      'Thank you.'
    ].join('\n');


    const whatsappUrl =
      `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;


    window.location.href = whatsappUrl;

  }

}
