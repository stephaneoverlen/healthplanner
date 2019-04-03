import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.page.html',
  styleUrls: ['./ordonnance.page.scss'],
})
export class OrdonnancePage implements OnInit {
  seancesNecessaires = 3;
  frequenceSeances = 3;

  constructor(
  ) { }

  ngOnInit() {
  }

  onDateSelect(date) {
    console.log(date);
  }

  ajoutSeanceNecessaire() {
    this.seancesNecessaires++;
  }

  suppressionSeanceNecessaire() {
    if (this.seancesNecessaires > 0) {
      this.seancesNecessaires--;
    }
  }

  ajoutFrequenceSeance() {
    this.frequenceSeances++;
  }

  suppressionFrequenceSeance() {
    if (this.frequenceSeances > 0) {
      this.frequenceSeances--;
    }
  }

  getItems(event) {
    console.log(event);
  }
}
