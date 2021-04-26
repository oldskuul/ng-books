import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Book } from '../../model/book.model'

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {

  @Input()
  book: Book;

  @Output()
  delete = new EventEmitter<void>();

  @Output()
  edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit();
  }

  onEditMode() {
    this.edit.emit();
    let modal_t  = document.getElementById('modal_2')
    modal_t.classList.remove('hidden')
    modal_t.classList.add('shown');
  }
}
