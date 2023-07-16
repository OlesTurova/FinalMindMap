import { Component, Injectable } from '@angular/core';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html', 
  styleUrls: ['./cards.component.css']
}
)

@Injectable(
  {
    providedIn: 'any'
  }
)

export class CardsComponent {

  onSubmit(form: NgForm) {
  
    console.log('TEST');    
  }
  color="red"
  DeleteCard(){
    
  }
  
  cards: CardsInterface[] = [
    {
      id: 1,
      title: "Imfirst card",
      text: "I dont know who i am there is nothing you can do there is nothing"
    },
    {
      id: 2,
      title: "Im second card",
      text: "im working wow"
    }
  ];

  ngOnInit(): void{

  }
  

}

export interface CardsInterface {
  id: number;
  title: string;
  text: string;
}
