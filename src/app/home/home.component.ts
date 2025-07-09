import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 showCommitteeMembers = false;

  committeeMembers = [
    { name: 'K Chandra Mouli' },
    { name: 'B Ashok' },
    { name: 'D Sri Hari' },
    { name: 'P Vivek' },
    { name: 'B Balaji' },
    { name: 'G Sunny' },
    { name: 'M Bhanu' },
    { name: 'D Gowtham' },
    { name: 'H Praveen' },
    { name: 'P Rahul' },
    { name: 'J Sai Ganesh' },
    { name: 'J Anji' },
    { name: 'Munna' },
    { name: 'Yasain' },
    { name: 'Yaswanth' },
    { name: 'Prudhvi' },
    { name: 'Narendhra' },
    { name: 'Chintu' }
  ];

  toggleCommitteeMembers() {
    this.showCommitteeMembers = !this.showCommitteeMembers;
  }
}
