import { Component } from '@angular/core';
import { About_Cards, Forcards } from '../foraboutme';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css', '../css/style.css']
})
export class AboutmeComponent {

  aboutme = About_Cards;

   selectedForcards?: Forcards;
    onSelect(carta: Forcards): void {
    this.selectedForcards = carta
  }

}

