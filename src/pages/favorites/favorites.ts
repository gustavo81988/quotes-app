import { Component } from '@angular/core';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quotesService: QuotesService){}

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes()
  }
}
