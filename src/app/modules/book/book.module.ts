import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { bookReducer, BOOK_REDUCER_NODE } from './store/book/book.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(BOOK_REDUCER_NODE, bookReducer)
  ],
})

export class BookModule{ }
