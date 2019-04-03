import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('save');
  }
  
  sendSMS() {
    console.log('sendSMS');
  }
  
  sendMail() {
    console.log('sendMail');
  }

}
