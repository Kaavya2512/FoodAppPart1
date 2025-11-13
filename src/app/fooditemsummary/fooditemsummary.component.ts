import { Component } from '@angular/core';

@Component({
  selector: 'app-fooditemsummary',
  standalone: true,
  imports: [],
  templateUrl: './fooditemsummary.component.html',
  styleUrl: './fooditemsummary.component.css'
})
export class FooditemsummaryComponent {
  foodName:string;
  originalPrice:number;
  foodRating:number
  discount:number
  constructor(){
    this.foodName ="Veg Burger"
    this.originalPrice=120.80
    this.discount=0.15
    this.foodRating=4.5
  }

}