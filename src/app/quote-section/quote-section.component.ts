import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.css']
})
export class QuoteSectionComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(  1, 'Fake it till you make it!', 'Budha', 'Gama', new Date, 0, 0),
    new Quotes(  2, 'Keep moving!', 'Budha', 'Gama', new Date, 0, 0 ),
    new Quotes(  3, 'The purpose of our lives is to be happy!', 'Dalai Lama', 'Gama', new Date, 0, 0 ),
    new Quotes(  4, 'Life is what happens when youre busy making other plans!', 'Stephen King', 'Gama', new Date, 0, 0 ),
    new Quotes(  5, 'You only live once, but if you do it right, once is enough!', 'Mae West', 'Gama', new Date, 0,0)
  ];

  toggleDetails(index){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
