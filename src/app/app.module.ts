import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BookModule } from './modules/book/book.module';
import { BookWidgetComponent } from './modules/book/widget/book-widget/book-widget.component';
import { BookCreateFormComponent } from './modules/book/ui/book-create-form/book-create-form.component';
import { BookListComponent } from './modules/book/ui/book-list/book-list.component';
import { BookListItemComponent } from './modules/book/ui/book-list-item/book-list-item.component';
import { ModalEditComponent } from './modules/book/ui/modal-edit/modal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BookWidgetComponent,
    BookCreateFormComponent,
    BookListComponent,
    BookListItemComponent,
    ModalEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    BookModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
