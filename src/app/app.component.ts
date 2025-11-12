import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FoodAppPart1';
  foodname:String ="Pizza"
  foodimage:string ="assets/images/pizza.png"
  foodprice:number =275

  orderNow(){
    alert('${this.foodname} has been added to the cart')
  }
}
