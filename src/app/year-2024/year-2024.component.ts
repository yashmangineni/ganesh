import { Component } from '@angular/core';

@Component({
  selector: 'app-year-2024',
  templateUrl: './year-2024.component.html',
  styleUrls: ['./year-2024.component.css']
})
export class Year2024Component {
photos = [
    {
      src: 'assets/2024.jpg',
      alt: 'Ganesha 2024',
      title: 'Grand Ganesha 2024',
      description: 'Magnificent Ganesha idol for 2024'
    },
    {
      src: 'assets/2024(1).jpg',
      alt: 'Festival preparations',
      title: 'Festival Preparations',
      description: 'Elaborate preparations for the festival'
    },
    {
      src: 'assets/24.jpg',
      alt: 'Community gathering',
      title: 'Community Gathering',
      description: 'Large community participation'
    },
    {
      src: 'assets/24(1).jpg',
      alt: 'Traditional rituals',
      title: 'Traditional Rituals',
      description: 'Sacred rituals and ceremonies'
    }
  ];

  videos = [
    {
      src: 'assets/video24.mp4',
      title: 'Ganesha Arrival 2024',
      description: 'The grand arrival of Lord Ganesha'
    },
    {
      src: 'assets/v24.mp4',
      title: 'Ganesha Arrival 2024',
      description: 'The grand arrival of Lord Ganesha'
    }
  ];

  teamMembers: any[] = []; // Placeholder if you want to use team section later
}
