import { Component, EventEmitter, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-create-form',
  templateUrl: './book-create-form.component.html',
  styleUrls: ['./book-create-form.component.scss']
})
export class BookCreateFormComponent implements OnInit {

  author = '';
  title = '';
  year = null;
  pages = null;

  @Output()
  create = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onCreate() {
    this.create.emit({author: this.author, title: this.title, year: this.year, pages: this.pages});
    let modal_t  = document.getElementById('modal_1');
    modal_t.classList.remove('shown');
    modal_t.classList.add('hidden');
    this.author = '';
    this.title = '';
    this.year = null;
    this.pages = null;
  }

  showDialog(){
    let modal_t  = document.getElementById('modal_1');
    modal_t.classList.remove('hidden');
    modal_t.classList.add('shown');
  }
  closeDialog() {
    let modal_t  = document.getElementById('modal_1');
    modal_t.classList.remove('shown');
    modal_t.classList.add('hidden');
    this.author = '';
    this.title = '';
    this.year = null;
    this.pages = null;
  }
}
