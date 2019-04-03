import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horaires',
  templateUrl: './horaires.page.html',
  styleUrls: ['./horaires.page.scss'],
})
export class HorairesPage implements OnInit {
  public days = [ 'Lundi', 'Mardi' , 'Mercredi', 'Jeudi', 'Vendredi' ];

  constructor() { }

  ngOnInit() {
  }

  getItems(event) {
    console.log(event);
  }

}
