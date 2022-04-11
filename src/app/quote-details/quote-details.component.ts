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

  constructor() { }

  ngOnInit(): void {
  }

}
