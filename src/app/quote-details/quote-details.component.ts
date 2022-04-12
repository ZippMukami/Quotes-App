import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote!: Quotes;
  @Output() done = new EventEmitter <boolean>();
quoteDone(complete:boolean){this.done.emit(complete)};


upvoting(){
  this.quote.upvote =this.quote.upvote+1;
}

downvoting(){
  this.quote.downvote =this.quote.downvote+1;
}
  constructor() { }

  ngOnInit(): void {
  }

}
