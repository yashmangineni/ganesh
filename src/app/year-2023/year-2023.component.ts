// import { Component, OnInit } from '@angular/core';
// import { Meta } from '@angular/platform-browser';

// @Component({
//   selector: 'app-year-2023',
//   templateUrl: './year-2023.component.html',
//   styleUrls: ['./year-2023.component.css']
// })
// export class Year2023Component implements OnInit {
  
//   constructor(private meta: Meta) {}

//   ngOnInit() {
//     this.meta.updateTag({ name: 'title', content: 'Bala Ganesh Youth Community 2023 | Festival Memories & Gallery Housing Board Guntur' });
//     this.meta.updateTag({ name: 'description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2023 Vinayaka Chavitihi Festival. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Browse through the cherished memories through our photo gallery, video collection, and event highlights from the grand celebration.' });
//     this.meta.updateTag({ property: 'og:title', content: 'Bala Ganesh Youth Community 2023 | Festival Memories & Gallery Housing Board Guntur' });
//     this.meta.updateTag({ property: 'og:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2023 Vinayaka Chavitihi Festival. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Browse through the cherished memories through our photo gallery, video collection, and event highlights from the grand celebration.' });
//     this.meta.updateTag({ property: 'og:url', content: 'http://balaganeshyouthguntur.duckdns.org/2023' });
//     this.meta.updateTag({ property: 'og:image', content: 'https://ganesh-rho.vercel.app/assets/2023(2).jpg' });
//     this.meta.updateTag({ property: 'twitter:title', content: 'Bala Ganesh Youth Community 2023 | Festival Memories & Gallery Housing Board Guntur' });
//     this.meta.updateTag({ property: 'twitter:description', content: 'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2023 Vinayaka Chavitihi Festival. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Browse through the cherished memories through our photo gallery, video collection, and event highlights from the grand celebration.' });
//       this.meta.updateTag({ property: 'twitter:image', content: 'https://ganesh-rho.vercel.app/assets/2023.jpg' });
//       // ensure page starts at top when opened via router
//       try { window.scrollTo(0,0); } catch (e) {}
//   }

// photos = [
//     {
//       src: 'assets/2023(2).jpg',
//       alt: 'Ganesha idol',
//       title: 'Main Ganesha Idol',
//       description: 'Beautiful decorated main idol for 2023'
//     },
//     {
//       src: 'assets/2023(3).jpg',
//       alt: 'Festival decoration',
//       title: 'Festival Decorations',
//       description: 'Colorful decorations and lights'
//     },
//     {
//       src: 'assets/2023(4).jpg',
//       alt: 'Prayers',
//       title: 'Prayer Ceremony',
//       description: 'Community prayers and rituals'
//     }
//   ];

//   videos = [
//     {
//       src: 'assets/23.mp4',
//       title: 'Ganesha Sthapana 2023',
//       description: 'The installation ceremony of Lord Ganesha'
//     },
//     {
//       src: 'assets/2222.mp4',
//       title: 'Ganesha Sthapana 2023',
//       description: 'The installation ceremony of Lord Ganesha'
//     }
//   ];

//   teamMembers: any[] = [];
// }

// import { Component, OnInit } from '@angular/core';
// import { Meta } from '@angular/platform-browser';
// import { HttpClient } from '@angular/common/http';

// interface ImageRecord {
//   _id: string;
//   year: number;
//   filename: string;
//   contentType: string;
//   createdAt?: string;
//   updatedAt?: string;
// }

// @Component({
//   selector: 'app-year-2023',
//   templateUrl: './year-2023.component.html',
//   styleUrls: ['./year-2023.component.css']
// })
// export class Year2023Component implements OnInit {

//   photos: ImageRecord[] = [];

//   loadingImages = true;
//   imageError = false;

//   videos = [
//     {
//       src: 'assets/23.mp4',
//       title: 'Ganesha Sthapana 2023',
//       description: 'The installation ceremony of Lord Ganesha'
//     },
//     {
//       src: 'assets/2222.mp4',
//       title: 'Ganesha Sthapana 2023',
//       description: 'The installation ceremony of Lord Ganesha'
//     }
//   ];

//   teamMembers: any[] = [];

//   private apiUrl =
//     'https://ganesh-be.onrender.com/api/images';

//   constructor(
//     private meta: Meta,
//     private http: HttpClient
//   ) {}

//   ngOnInit(): void {

//     this.meta.updateTag({
//       name: 'title',
//       content:
//         'Bala Ganesh Youth Community 2023 | Festival Memories & Gallery Housing Board Guntur'
//     });

//     this.meta.updateTag({
//       name: 'description',
//       content:
//         'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2023 Vinayaka Chavitihi Festival. Located in Housing Board Colony near Masjid Guntur and near Sai Baba Temple. Browse through the cherished memories through our photo gallery, video collection, and event highlights from the grand celebration.'
//     });

//     this.meta.updateTag({
//       property: 'og:title',
//       content:
//         'Bala Ganesh Youth Community 2023 | Festival Memories & Gallery Housing Board Guntur'
//     });

//     this.meta.updateTag({
//       property: 'og:description',
//       content:
//         'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2023 Vinayaka Chavitihi Festival.'
//     });

//     this.meta.updateTag({
//       property: 'og:url',
//       content:
//         'http://balaganeshyouthguntur.duckdns.org/2023'
//     });

//     this.meta.updateTag({
//       property: 'og:image',
//       content:
//         'https://ganesh-rho.vercel.app/assets/2023(2).jpg'
//     });

//     this.meta.updateTag({
//       property: 'twitter:title',
//       content:
//         'Bala Ganesh Youth Community 2023 | Festival Memories & Gallery Housing Board Guntur'
//     });

//     this.meta.updateTag({
//       property: 'twitter:description',
//       content:
//         'Bala Ganesh Youth Community at Housing Board Guntur (APHB Guntur) 2023 Vinayaka Chavitihi Festival.'
//     });

//     this.meta.updateTag({
//       property: 'twitter:image',
//       content:
//         'https://ganesh-rho.vercel.app/assets/2023.jpg'
//     });

//     this.loadImages();

//     try {
//       window.scrollTo(0, 0);
//     } catch (e) {}
//   }

//   // ==========================================
//   // LOAD 2023 IMAGES
//   // ==========================================

//   loadImages(): void {

//     this.loadingImages = true;
//     this.imageError = false;

//     const url =
//       'https://ganesh-be.onrender.com/api/images?year=2023';

//     console.log('Calling API:', url);

//     this.http.get<ImageRecord[]>(url).subscribe({

//       next: (response) => {

//         console.log('2023 API SUCCESS:', response);

//         this.photos = response;

//         this.loadingImages = false;
//       },

//       error: (error) => {

//         console.error('2023 API ERROR:', error);
//         console.error('Status:', error.status);
//         console.error('Error body:', error.error);

//         this.loadingImages = false;
//         this.imageError = true;
//       }

//     });
//   }

//   // ==========================================
//   // ACTUAL IMAGE URL
//   // ==========================================

//   getImageUrl(photo: ImageRecord): string {

//     return `${this.apiUrl}/${photo._id}/file`;
//   }

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
  selector: 'app-year-2023',
  templateUrl: './year-2023.component.html',
  styleUrls: ['./year-2023.component.css']
})
export class Year2023Component implements OnInit {

  photos: ImageRecord[] = [];

  loadingImages = true;
  imageError = false;

  private apiUrl =
    'https://ganesh-be.onrender.com/api/images';

  videos = [
    {
      src: 'assets/23.mp4',
      title: 'Ganesha Sthapana 2023',
      description: 'The installation ceremony of Lord Ganesha'
    },
    {
      src: 'assets/2222.mp4',
      title: 'Ganesha Sthapana 2023',
      description: 'The installation ceremony of Lord Ganesha'
    }
  ];

  teamMembers: any[] = [];

  constructor(
    private meta: Meta,
    private title: Title,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

    // =====================================================
    // SEO TITLE
    // =====================================================

    this.title.setTitle(
      'Bala Ganesh Youth Community 2023 | Ganesh Utsav Photos & Videos | Guntur'
    );


    // =====================================================
    // SEO DESCRIPTION
    // =====================================================

    this.meta.updateTag({
      name: 'description',
      content:
        'Bala Ganesh Youth Community 2023 Ganesh Utsav festival photos, videos and cherished memories from Housing Board Colony, Guntur, Andhra Pradesh.'
    });


    // =====================================================
    // OPEN GRAPH
    // =====================================================

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Bala Ganesh Youth Community 2023 | Ganesh Utsav Photos & Videos'
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Explore Bala Ganesh Youth Community Ganesh Utsav 2023 photos, videos and festival memories from Housing Board Colony, Guntur.'
    });

    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://balaganeshyouthguntur.duckdns.org/2023'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://ganesh-rho.vercel.app/assets/2023(2).jpg'
    });


    // =====================================================
    // TWITTER
    // =====================================================

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Bala Ganesh Youth Community 2023 | Ganesh Utsav Photos & Videos'
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Explore Bala Ganesh Youth Community Ganesh Utsav 2023 photos, videos and festival memories from Guntur.'
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://ganesh-rho.vercel.app/assets/2023.jpg'
    });


    // =====================================================
    // CANONICAL URL
    // =====================================================

    this.setCanonicalUrl(
      'https://balaganeshyouthguntur.duckdns.org/2023'
    );


    // =====================================================
    // LOAD IMAGES
    // =====================================================

    this.loadImages();


    // =====================================================
    // START PAGE FROM TOP
    // =====================================================

    try {
      window.scrollTo(0, 0);
    } catch (e) {}
  }


  // =======================================================
  // LOAD 2023 IMAGES FROM LIVE API
  // =======================================================

  loadImages(): void {

    this.loadingImages = true;
    this.imageError = false;

    const url =
      `${this.apiUrl}?year=2023`;

    console.log(
      'Calling 2023 image API:',
      url
    );

    this.http
      .get<ImageRecord[]>(url)
      .subscribe({

        next: (response) => {

          console.log(
            '2023 API SUCCESS:',
            response
          );

          this.photos = response;

          this.loadingImages = false;
        },

        error: (error) => {

          console.error(
            '2023 API ERROR:',
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


  // =======================================================
  // ACTUAL IMAGE FILE URL
  // =======================================================

  getImageUrl(
    photo: ImageRecord
  ): string {

    return `${this.apiUrl}/${photo._id}/file`;
  }


  // =======================================================
  // SEO FRIENDLY ALT TEXT
  // =======================================================

  getImageAlt(
    photo: ImageRecord
  ): string {

    return (
      'Bala Ganesh Youth Community ' +
      'Ganesh Utsav 2023 - ' +
      photo.filename +
      ' - Guntur'
    );
  }


  // =======================================================
  // CANONICAL URL
  // =======================================================

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