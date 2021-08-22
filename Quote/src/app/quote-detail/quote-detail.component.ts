import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quote!: Quote;
  @Output() isDelete = new EventEmitter <boolean>();
  @Output() isUpvote = new EventEmitter <boolean>();
  quoteDelete(deleteIs : boolean){
    this.isDelete.emit(deleteIs);
  }
  upvote(upvoteIs :boolean){
    this.isUpvote.emit(upvoteIs);
    
  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
