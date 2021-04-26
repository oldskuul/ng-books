import { Component, OnInit } from '@angular/core';
import { select, Store} from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '../../model/book.model';
import { BookCreateAction, BookDeleteAction, BookEditAction } from '../../store/book/book.actions';
import { BookState } from '../../store/book/book.reducer';
import { bookListSelector } from '../../store/book/book.selectors';
import { BookSyncStorageService } from '../../service/book-sync-storage.service'

@Component({
  selector: 'app-book-widget',
  templateUrl: './book-widget.component.html',
  styleUrls: ['./book-widget.component.scss']
})
export class BookWidgetComponent implements OnInit {

  bookList: Book [] = [];
  bookList$: Observable<Book[]> = this.store$.pipe(select(bookListSelector));
  
  constructor(
    private store$: Store<BookState>,
    private bookSyncStorage: BookSyncStorageService
    ) { }

  ngOnInit() {
    this.bookSyncStorage.init();
  }

  onCreate(event) {
    this.store$.dispatch(new BookCreateAction(event))
  }

  onDelete(id: number) {
    this.store$.dispatch(new BookDeleteAction({ id }))
  }

  onEdit(event) {
    this.store$.dispatch(new BookEditAction(event))
  }
}
