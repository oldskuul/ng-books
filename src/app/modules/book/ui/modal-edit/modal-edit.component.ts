import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../model/book.model';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  author = '';
  title = '';
  year = null;
  pages = null;

  @Input()
  book: Book;

  @Output()
  edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.author = this.book.author;
    this.title = this.book.title;
    this.year = this.book.year;
    this.pages = this.book.pages;
  }

  onEdit() {
    this.edit.emit({author: this.author, title: this.title, year: this.year, pages: this.pages});
    let modal_t = document.getElementById('modal_2')
    modal_t.classList.remove('shown')
    modal_t.classList.add('hidden');
  }

  onCancel() {
    let modal_t = document.getElementById('modal_2')
    modal_t.classList.remove('shown')
    modal_t.classList.add('hidden');
    this.author = this.book.author;
    this.title = this.book.title;
    this.year = this.book.year;
    this.pages = this.book.pages;
  }
}
