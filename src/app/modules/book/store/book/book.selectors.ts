import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState, BOOK_REDUCER_NODE } from './book.reducer'

export const bookFeatureSelector = createFeatureSelector<BookState>(BOOK_REDUCER_NODE)

export const bookListSelector = createSelector(
  bookFeatureSelector,
  state => state.bookList
)
