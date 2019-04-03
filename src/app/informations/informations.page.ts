import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})
export class InformationsPage implements OnInit {
  npa: string;
  
  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  gotoPraticien() {
    localStorage.setItem('npa', this.npa);
    this.navCtrl.navigateRoot('/praticien');
  }

  getItems(event) {
    console.log(event);
  }

}
