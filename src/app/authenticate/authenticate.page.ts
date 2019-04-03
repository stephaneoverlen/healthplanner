import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.page.html',
  styleUrls: ['./authenticate.page.scss'],
})
export class AuthenticatePage implements OnInit {
  identifiant: string;

  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  validate() {
    if (this.identifiant == 'medecin') {
      this.navCtrl.navigateRoot('/programme');
    } else if (this.identifiant == 'patient') {
      this.navCtrl.navigateRoot('/parcours');
    }
  }
}
