import { Component, OnInit } from '@angular/core';
import { Storage } from '../storage';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-praticien',
  templateUrl: './praticien.page.html',
  styleUrls: ['./praticien.page.scss'],
})
export class PraticienPage implements OnInit {
  resultArray = [];
  previousPageSelected = [];
  criteres = this.storage.criteres;
  npa: string;

  filters = ['Praticien', 'Profession', 'Spécialisation', 'Itinéraire clinique', 'Soin à domicile'];

  constructor(
    public storage: Storage,
    private menu: MenuController,
  ) { }

  ngOnInit() {
    this.npa = localStorage.getItem('npa');
    this.previousPageSelected = this.storage.activities.filter(activity =>
      activity[0] == decodeURI(window.location.search.split('selected=')[1])
    )[0];
    this.getItems(null);
    console.log(this.criteres);
  }

  getItems(event) {
    if (!event || event.detail.value == '') {
      this.storage.praticiens.forEach(praticien => {
        this.resultArray.push(praticien);
      });
    } else {
      this.storage.praticiens.forEach(praticien => {
        if (praticien.name.toLowerCase().includes(event.detail.value.toLowerCase())
          && !this.resultArray.includes(praticien)) {
          // si l'activité contient le texte entré ET le tableau ne le contient pas: l'ajouter au tableau
          this.resultArray.push(praticien);
        } else if (!praticien.name.toLowerCase().includes(event.detail.value.toLowerCase())
          && this.resultArray.includes(praticien)) {
          // si l'activité ne contient pas le texte entré ET le tableau le contient déjà: le supprimer du tableau
          const index = this.resultArray.indexOf(praticien);
          this.resultArray.splice(index, 1);
        }
        console.log(this.resultArray);
      });
    }
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
