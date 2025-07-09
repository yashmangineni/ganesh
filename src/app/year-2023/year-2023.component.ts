import { Component } from '@angular/core';

@Component({
  selector: 'app-year-2023',
  templateUrl: './year-2023.component.html',
  styleUrls: ['./year-2023.component.css']
})
export class Year2023Component {
photos = [
    {
      src: 'assets/2023(2).jpg',
      alt: 'Ganesha idol',
      title: 'Main Ganesha Idol',
      description: 'Beautiful decorated main idol for 2023'
    },
    {
      src: 'assets/2023(3).jpg',
      alt: 'Festival decoration',
      title: 'Festival Decorations',
      description: 'Colorful decorations and lights'
    },
    {
      src: 'assets/2023(4).jpg',
      alt: 'Prayers',
      title: 'Prayer Ceremony',
      description: 'Community prayers and rituals'
    }
  ];

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
}
