// import { Component, OnInit } from '@angular/core';
// import { Meta } from '@angular/platform-browser';

// @Component({
//   selector: 'app-year-2024',
//   templateUrl: './year-2024.component.html',
//   styleUrls: ['./year-2024.component.css']
// })
// export class Year2024Component implements OnInit {
  
//   constructor(private meta: Meta) {}

//   ngOnInit() {
//     this.meta.updateTag({ name: 'title', content: 'Bala Ganesh Youth Community 2024 | Photos & Videos Gallery Housing Board Guntur' });
//     this.meta.updateTag({ name: 'description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2024 Vinayaka Chavitihi Festival. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Relive the memorable moments through our photo gallery, video collection, and event highlights from the grand celebration.' });
//     this.meta.updateTag({ property: 'og:title', content: 'Bala Ganesh Youth Community 2024 | Photos & Videos Gallery Housing Board Guntur' });
//     this.meta.updateTag({ property: 'og:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2024 Vinayaka Chavitihi Festival. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Relive the memorable moments through our photo gallery, video collection, and event highlights from the grand celebration.' });
//     this.meta.updateTag({ property: 'og:url', content: 'http://balaganeshyouthguntur.duckdns.org/2024' });
//     this.meta.updateTag({ property: 'og:image', content: 'https://ganesh-rho.vercel.app/assets/2024.jpg' });
//     this.meta.updateTag({ property: 'twitter:title', content: 'Bala Ganesh Youth Community 2024 | Photos & Videos Gallery Housing Board Guntur' });
//     this.meta.updateTag({ property: 'twitter:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2024 Vinayaka Chavitihi Festival. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Relive the memorable moments through our photo gallery, video collection, and event highlights from the grand celebration.' });
//     this.meta.updateTag({ property: 'twitter:image', content: 'https://ganesh-rho.vercel.app/assets/2024.jpg' });
//       // ensure page starts at top when opened via router
//       try { window.scrollTo(0,0); } catch (e) {}
//   }

// photos = [
//     {
//       src: 'assets/2024.jpg',
//       alt: 'Ganesha 2024',
//       title: 'Grand Ganesha 2024',
//       description: 'Magnificent Ganesha idol for 2024'
//     },
//     {
//       src: 'assets/2024(1).jpg',
//       alt: 'Festival preparations',
//       title: 'Festival Preparations',
//       description: 'Elaborate preparations for the festival'
//     },
//     {
//       src: 'assets/24.jpg',
//       alt: 'Community gathering',
//       title: 'Community Gathering',
//       description: 'Large community participation'
//     },
//     {
//       src: 'assets/24(1).jpg',
//       alt: 'Traditional rituals',
//       title: 'Traditional Rituals',
//       description: 'Sacred rituals and ceremonies'
//     }
//   ];

//   videos = [
//     {
//       src: 'assets/video24.mp4',
//       title: 'Ganesha Arrival 2024',
//       description: 'The grand arrival of Lord Ganesha'
//     },
//     {
//       src: 'assets/v24.mp4',
//       title: 'Ganesha Arrival 2024',
//       description: 'The grand arrival of Lord Ganesha'
//     }
//   ];

//   teamMembers: any[] = []; // Placeholder if you want to use team section later
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
  selector: 'app-year-2024',
  templateUrl: './year-2024.component.html',
  styleUrls: ['./year-2024.component.css']
})
export class Year2024Component implements OnInit {

  // =====================================================
  // PHOTO DATA
  // =====================================================

  photos: ImageRecord[] = [];

  loadingImages = true;

  imageError = false;


  // =====================================================
  // SELECTED IMAGE
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
      src: 'assets/video24.mp4',
      title: 'Ganesha Arrival 2024',
      description:
        'The grand arrival of Lord Ganesha'
    },
    {
      src: 'assets/v24.mp4',
      title: 'Ganesha Arrival 2024',
      description:
        'The grand arrival of Lord Ganesha'
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
      'Bala Ganesh Youth Community 2024 | Photos & Videos Gallery Housing Board Guntur'
    );


    // ===================================================
    // META DESCRIPTION
    // ===================================================

    this.meta.updateTag({
      name: 'description',
      content:
        'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2024 Vinayaka Chavithi Festival. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Relive the memorable moments through our photo gallery, video collection, and event highlights from the grand celebration.'
    });


    // ===================================================
    // OPEN GRAPH TITLE
    // ===================================================

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Bala Ganesh Youth Community 2024 | Photos & Videos Gallery Housing Board Guntur'
    });


    // ===================================================
    // OPEN GRAPH DESCRIPTION
    // ===================================================

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2024 Vinayaka Chavithi Festival. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Relive the memorable moments through our photo gallery, video collection, and event highlights from the grand celebration.'
    });


    // ===================================================
    // OPEN GRAPH URL
    // ===================================================

    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://balaganeshyouthguntur.duckdns.org/2024'
    });


    // ===================================================
    // OPEN GRAPH IMAGE
    // ===================================================

    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://ganesh-rho.vercel.app/assets/2024.jpg'
    });


    // ===================================================
    // TWITTER TITLE
    // ===================================================

    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Bala Ganesh Youth Community 2024 | Photos & Videos Gallery Housing Board Guntur'
    });


    // ===================================================
    // TWITTER DESCRIPTION
    // ===================================================

    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2024 Vinayaka Chavithi Festival. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Relive the memorable moments through our photo gallery, video collection, and event highlights from the grand celebration.'
    });


    // ===================================================
    // TWITTER IMAGE
    // ===================================================

    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://ganesh-rho.vercel.app/assets/2024.jpg'
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
    // =====================================================

    this.setCanonicalUrl(
      'https://balaganeshyouthguntur.duckdns.org/2024'
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
  // LOAD 2024 IMAGES FROM API
  // =====================================================

  loadImages(): void {

    this.loadingImages = true;

    this.imageError = false;


    const url =
      `${this.apiUrl}?year=2024`;


    console.log(
      'Calling 2024 API:',
      url
    );


    this.http
      .get<ImageRecord[]>(url)
      .subscribe({

        next: (images) => {

          console.log(
            '2024 API SUCCESS:',
            images
          );


          // Keep API response order
          this.photos = images;


          this.loadingImages = false;
        },


        error: (error) => {

          console.error(
            '2024 API ERROR:',
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
      'Ganesh Utsav 2024 - ' +
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

    // Prevent background scrolling
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