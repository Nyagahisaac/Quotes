import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'this is a quote', 'Dan', 3, 4, 'This is the Description', new Date()),
    new Quote(2, 'this is a quote 2', 'Two Face', 3, 4, 'This is the Description 2', new Date()),
    new Quote(3, 'this is a quote 3', 'Izooh', 3, 4, 'This is the Description 3', new Date()),
    new Quote(4, 'this is a quote 4', 'Reddington', 3, 4, 'This is the Description 4', new Date())
  ]
  toggleDetails(index: any) {
    this.quotes[index].displayDescription = !this.quotes[index].displayDescription;
  }
  deleteQuote(isDelete: any, index: any) {
    if (isDelete) {
      let toDelete = confirm('Are you sure you want to delete quote ' + index);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote: any) {
    quote.id = this.quotes.length + 1;
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit(): void {
  }
}
function submitQuote() {
  throw new Error('Function not implemented.');
}

function newDate(): Date {
  throw new Error('Function not implemented.');
}

