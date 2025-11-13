import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {basicfooddatacomponent} from './basicfooddata/basicfooddata.component';
import {fooditemsummarycomponent} from './fooditemsummary/fooditemsummary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,basicfooddataComponent,fooditemsummarycomponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FoodAppPart1';
  
}
