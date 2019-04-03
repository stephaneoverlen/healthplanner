import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalisation',
  templateUrl: './finalisation.page.html',
  styleUrls: ['./finalisation.page.scss'],
})
export class FinalisationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getItems(event) {
    console.log(event);
  }
}
