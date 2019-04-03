import { Component, OnInit } from '@angular/core';
import { Storage } from '../storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categories: any;
  searchKey = '';
  resultArray = [];
  chooseTypeClicked : boolean;

  constructor(
    public storage: Storage,
    public navCtrl: NavController,
  ) {
  }

  ngOnInit() {
  }

  showHideButtons(): void {
    this.chooseTypeClicked = !this.chooseTypeClicked;
  }

  getItems(event) {
    if (event.detail.value == '') {
      this.resultArray = [];
    } else {
      this.storage.activities.forEach(activity => {
        if (activity[0].toString().toLowerCase().includes(event.detail.value.toLowerCase())
          && !this.resultArray.includes(activity)) {
          // si l'activité contient le texte entré ET le tableau ne le contient pas: l'ajouter au tableau
          this.resultArray.push(activity);
        } else if (!activity[0].toString().toLowerCase().includes(event.detail.value.toLowerCase())
          && this.resultArray.includes(activity)) {
          // si l'activité ne contient pas le texte entré ET le tableau le contient déjà: le supprimer du tableau
          const index = this.resultArray.indexOf(activity);
          this.resultArray.splice(index, 1);
        }
      });
    }
  }

  authenticate() {
    this.navCtrl.navigateRoot('/authenticate');
  }

  testtest() {
    this.navCtrl.navigateRoot('/informations');
  }
}
