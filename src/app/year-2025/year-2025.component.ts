// import { Component, OnInit } from '@angular/core';
// import { Meta } from '@angular/platform-browser';

// @Component({
//   selector: 'app-year-2025',
//   templateUrl: './year-2025.component.html',
//   styleUrls: ['./year-2025.component.css']
// })
// export class Year2025Component implements OnInit {
  
//   constructor(private meta: Meta) {}

//   ngOnInit() {
//     this.meta.updateTag({ name: 'title', content: 'Bala Ganesh Youth Community 2025 | Vinayaka Chavitihi Festival Housing Board Guntur' });
//     this.meta.updateTag({ name: 'description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2025 Vinayaka Chavitihi Festival Celebration. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Find event schedules, greetings, cultural programs, and celebration details for this auspicious Hindu festival.' });
//     this.meta.updateTag({ property: 'og:title', content: 'Bala Ganesh Youth Community 2025 | Vinayaka Chavitihi Festival Housing Board Guntur' });
//     this.meta.updateTag({ property: 'og:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2025 Vinayaka Chavitihi Festival Celebration. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Find event schedules, greetings, cultural programs, and celebration details for this auspicious Hindu festival.' });
//     this.meta.updateTag({ property: 'og:url', content: 'http://balaganeshyouthguntur.duckdns.org/2025' });
//     this.meta.updateTag({ property: 'og:image', content: 'https://images.pexels.com/photos/8686200/pexels-photo-8686200.jpeg?auto=compress&cs=tinysrgb&w=600' });
//     this.meta.updateTag({ property: 'twitter:title', content: 'Bala Ganesh Youth Community 2025 | Vinayaka Chavitihi Festival Housing Board Guntur' });
//     this.meta.updateTag({ property: 'twitter:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2025 Vinayaka Chavitihi Festival Celebration. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Find event schedules, greetings, cultural programs, and celebration details for this auspicious Hindu festival.' });
//     this.meta.updateTag({ property: 'twitter:image', content: 'https://images.pexels.com/photos/8686200/pexels-photo-8686200.jpeg?auto=compress&cs=tinysrgb&w=600' });
//     // ensure page starts at top when opened via router
//     try { window.scrollTo(0,0); } catch (e) {}
//   }

//   photos = [
//     {
//       src: 'assets/placeholder.jpg',
//       alt: 'Ganesha 2025',
//       title: 'Photos Coming Soon',
//       description: 'Festival photos will be uploaded soon'
//     },
//     {
//       src: 'assets/placeholder.jpg',
//       alt: 'Festival 2025',
//       title: 'Celebration Moments',
//       description: 'Community celebration memories'
//     },
//     {
//       src: 'assets/placeholder.jpg',
//       alt: 'Decorations 2025',
//       title: 'Festival Decorations',
//       description: 'Beautiful festival decorations'
//     }
//   ];

//   videos = [
//     {
//       src: 'assets/placeholder.mp4',
//       title: 'Celebration 2025',
//       description: 'Festival celebration video coming soon'
//     },
//     {
//       src: 'assets/placeholder.mp4',
//       title: 'Rituals & Ceremonies',
//       description: 'Traditional rituals video'
//     }
//   ];

// }


import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

interface ImageRecord {
  _id: string;
  year: number;
  filename: string;
  contentType: string;
  createdAt?: string;
  updatedAt?: string;
}

@Component({
  selector: 'app-year-2025',
  templateUrl: './year-2025.component.html',
  styleUrls: ['./year-2025.component.css']
})
export class Year2025Component implements OnInit {

  // =====================================================
  // PHOTO DATA
  // =====================================================

  photos: ImageRecord[] = [];

  loadingImages = true;

  imageError = false;


  // =====================================================
  // SELECTED IMAGE
  // Used by fullscreen image viewer
  // =====================================================

  selectedImage: ImageRecord | null = null;


  // =====================================================
  // API
  // =====================================================

  private apiUrl =
    'https://ganesh-be.onrender.com/api/images';


  // =====================================================
  // VIDEOS
  // =====================================================

  videos = [
    {
      src: 'assets/placeholder.mp4',
      title: 'Celebration 2025',
      description:
        'Festival celebration video coming soon'
    },
    {
      src: 'assets/placeholder.mp4',
      title: 'Rituals & Ceremonies',
      description:
        'Traditional rituals video'
    }
  ];


  // =====================================================
  // TEAM
  // =====================================================

  teamMembers: any[] = [];


  // =====================================================
  // CONSTRUCTOR
  // =====================================================

  constructor(
    private meta: Meta,
    private title: Title,
    private http: HttpClient
  ) {}


  // =====================================================
  // ON INIT
  // =====================================================

  ngOnInit(): void {

    // ===================================================
    // SEO TITLE
    // ===================================================

    this.title.setTitle(
      'Bala Ganesh Youth Community 2025 | Vinayaka Chavithi Festival Housing Board Guntur'
    );


    // ===================================================
    // META DESCRIPTION
    // ===================================================

    this.meta.updateTag({
      name: 'description',
      content:
        'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2025 Vinayaka Chavithi Festival Celebration. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Find event schedules, greetings, cultural programs, and celebration details for this auspicious Hindu festival.'
    });


    // ===================================================
    // OPEN GRAPH TITLE
    // ===================================================

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Bala Ganesh Youth Community 2025 | Vinayaka Chavithi Festival Housing Board Guntur'
    });


    // ===================================================
    // OPEN GRAPH DESCRIPTION
    // ===================================================

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2025 Vinayaka Chavithi Festival Celebration.'
    });


    // ===================================================
    // OPEN GRAPH URL
    // ===================================================

    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://balaganeshyouthguntur.duckdns.org/2025'
    });


    // ===================================================
    // OPEN GRAPH IMAGE
    // ===================================================

    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://images.pexels.com/photos/8686200/pexels-photo-8686200.jpeg?auto=compress&cs=tinysrgb&w=600'
    });


    // ===================================================
    // TWITTER TITLE
    // ===================================================

    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Bala Ganesh Youth Community 2025 | Vinayaka Chavithi Festival Housing Board Guntur'
    });


    // ===================================================
    // TWITTER DESCRIPTION
    // ===================================================

    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2025 Vinayaka Chavithi Festival Celebration.'
    });


    // ===================================================
    // TWITTER IMAGE
    // ===================================================

    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://images.pexels.com/photos/8686200/pexels-photo-8686200.jpeg?auto=compress&cs=tinysrgb&w=600'
    });


    // ===================================================
    // TWITTER CARD
    // ===================================================

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });


    // ===================================================
    // CANONICAL URL
    // ===================================================

    this.setCanonicalUrl(
      'https://balaganeshyouthguntur.duckdns.org/2025'
    );


    // ===================================================
    // LOAD IMAGES
    // ===================================================

    this.loadImages();


    // ===================================================
    // START PAGE FROM TOP
    // ===================================================

    try {
      window.scrollTo(0, 0);
    } catch (e) {
      // Ignore
    }
  }


  // =====================================================
  // LOAD 2025 IMAGES
  // =====================================================

  loadImages(): void {

    this.loadingImages = true;

    this.imageError = false;


    const url =
      `${this.apiUrl}?year=2025`;


    console.log(
      'Calling 2025 API:',
      url
    );


    this.http
      .get<ImageRecord[]>(url)
      .subscribe({

        next: (images) => {

          console.log(
            '2025 API SUCCESS:',
            images
          );


          // Keep API response order
          this.photos = images;


          this.loadingImages = false;
        },


        error: (error) => {

          console.error(
            '2025 API ERROR:',
            error
          );


          console.error(
            'Status:',
            error.status
          );


          console.error(
            'Error body:',
            error.error
          );


          this.loadingImages = false;

          this.imageError = true;
        }

      });
  }


  // =====================================================
  // ACTUAL IMAGE FILE URL
  // =====================================================

  getImageUrl(
    photo: ImageRecord
  ): string {

    return `${this.apiUrl}/${photo._id}/file`;
  }


  // =====================================================
  // IMAGE ALT TEXT
  // =====================================================

  getImageAlt(
    photo: ImageRecord
  ): string {

    return (
      'Bala Ganesh Youth Community ' +
      'Ganesh Utsav 2025 - ' +
      photo.filename +
      ' - Guntur'
    );
  }


  // =====================================================
  // OPEN FULLSCREEN IMAGE
  // =====================================================

  openImage(
    photo: ImageRecord
  ): void {

    this.selectedImage = photo;

    // Stop background page scrolling
    document.body.style.overflow = 'hidden';
  }


  // =====================================================
  // CLOSE FULLSCREEN IMAGE
  // =====================================================

  closeImage(): void {

    this.selectedImage = null;

    // Restore background scrolling
    document.body.style.overflow = '';
  }


  // =====================================================
  // CANONICAL URL
  // =====================================================

  private setCanonicalUrl(
    url: string
  ): void {

    let canonical =
      document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;


    if (!canonical) {

      canonical =
        document.createElement(
          'link'
        );


      canonical.setAttribute(
        'rel',
        'canonical'
      );


      document.head.appendChild(
        canonical
      );
    }


    canonical.setAttribute(
      'href',
      url
    );
  }

}