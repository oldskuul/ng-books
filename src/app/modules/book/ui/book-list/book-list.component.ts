import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../model/book.model'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  editIds: number[] = [];
  
  @Input()
  bookList: Book[] = []

  @Output()
  delete = new EventEmitter<number>();

  @Output()
  edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onEdit(event, id: number) {
    this.editIds = this.editIds.filter(item => item != id);
    this.edit.emit({id, event});
  }

  onEditMode(id: number) {
    this.editIds.push(id);
  }
}
