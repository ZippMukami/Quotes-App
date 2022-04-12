import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.css']
})
export class QuoteSectionComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(1, 'Fake it till you make it!', 'Budha', 'Ruto', new Date(2021,1,2), 5, 1),
    new Quotes(2, 'Keep moving!', 'Davido', 'Uhunye', new Date(2019,1,2), 0, 0),
    new Quotes(3, 'The purpose of our lives is to be happy!', 'Dalai Lama', 'Rao', new Date, 8, 10),
    new Quotes(4, 'Life is what happens when youre busy making other plans!', 'Stephen King', 'Kalonzo', new Date, 14, 4),
    new Quotes(5, 'You only live once, but if you do it right, once is enough!', 'Mae West', 'Mudavadi', new Date, 11, 5)
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  };

  completeQuote(done, index) {
    this.quotes.splice(index, 1);
  };

  addNewQuote(quote){ let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.date=new Date(quote.date)
  this.quotes.push(quote)


};
  constructor() { }

  ngOnInit(): void {
  }

}
