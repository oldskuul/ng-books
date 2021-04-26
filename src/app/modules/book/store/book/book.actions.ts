import { Action } from '@ngrx/store';
import { BookState } from './book.reducer';

export enum bookActionsType {
  create = '[BOOK] Create book item',
  delete = '[BOOK] Delete book item',
  edit = '[BOOK] Edit book item',
  load = '[BOOK] Load book state'
}

export class BookCreateAction implements Action {
  readonly type = bookActionsType.create;
  constructor(public payload: {
    id: number,
    author: string,
    title: string,
    year: number,
    pages: number,
  }) { }
}

export class BookDeleteAction implements Action {
  readonly type = bookActionsType.delete;
  constructor(public payload: {
    id: number
  }) { }
}

export class BookEditAction implements Action {
  readonly type = bookActionsType.edit;
  constructor(public payload: {
    id: number,
    event: {
      author: string,
      title: string,
      year: number,
      pages: number
    }
  }) { }
}

export class BookLoadStateAction implements Action {
  readonly type = bookActionsType.load;
  constructor(public payload: {
    state: BookState
  }) { }
}

export type BookActions = BookCreateAction | BookDeleteAction | BookEditAction | BookLoadStateAction;
