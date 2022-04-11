import { Component } from '@angular/core';
import { Quotes } from './quotes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes:Quotes[]=[
  {id:1,quote:'Fake it till you make it!',author:'Budha', user:'Gama', date:new Date, upvote:0, downvote:0}
];



}
