import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-getpatientphonenumber',
  templateUrl: './getpatientphonenumber.page.html',
  styleUrls: ['./getpatientphonenumber.page.scss'],
})
export class GetpatientphonenumberPage implements OnInit {
  phone: any;
  
  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  validate() {
    this.navCtrl.navigateRoot('/dashboard');
  }

}
