import { Component, OnInit } from '@angular/core';
import { Storage } from '../storage';

@Component({
  selector: 'app-deplacement',
  templateUrl: './deplacement.page.html',
  styleUrls: ['./deplacement.page.scss'],
})
export class DeplacementPage implements OnInit {
  resultArray = [];

  constructor(
    public storage: Storage,
  ) { }

  ngOnInit() {
    this.getItems(null);
  }

  getItems(event) {
    if (!event || event.detail.value == '') {
      this.storage.transports.forEach(transport => {
        this.resultArray.push(transport);
      });
    } else {
      this.storage.transports.forEach(transport => {
        if (transport.name.toLowerCase().includes(event.detail.value.toLowerCase())
          && !this.resultArray.includes(transport)) {
          // si l'activité contient le texte entré ET le tableau ne le contient pas: l'ajouter au tableau
          this.resultArray.push(transport);
        } else if (!transport.name.toLowerCase().includes(event.detail.value.toLowerCase())
          && this.resultArray.includes(transport)) {
          // si l'activité ne contient pas le texte entré ET le tableau le contient déjà: le supprimer du tableau
          const index = this.resultArray.indexOf(transport);
          this.resultArray.splice(index, 1);
        }
      });
    }
  }
}
