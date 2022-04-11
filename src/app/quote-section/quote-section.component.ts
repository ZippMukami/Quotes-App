import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.css']
})
export class QuoteSectionComponent implements OnInit {
  quotes: Quotes[] = [
    { id: 1, quote: 'Fake it till you make it!', author: 'Budha', user: 'Gama', date: new Date, upvote: 0, downvote: 0 },
    { id: 2, quote: 'Keep moving!', author: 'Budha', user: 'Gama', date: new Date, upvote: 0, downvote: 0 },
    { id: 3, quote: 'The purpose of our lives is to be happy!', author: 'Dalai Lama', user: 'Gama', date: new Date, upvote: 0, downvote: 0 },
    { id: 4, quote: 'Life is what happens when youre busy making other plans!', author: 'Stephen King', user: 'Gama', date: new Date, upvote: 0, downvote: 0 },
    { id: 5, quote: 'You only live once, but if you do it right, once is enough!', author: 'Mae West', user: 'Gama', date: new Date, upvote: 0, downvote: 0 }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
