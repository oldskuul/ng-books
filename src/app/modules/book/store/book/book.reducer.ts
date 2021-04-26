import { Book} from '../../model/book.model';
import { BookActions } from './book.actions';
import { bookActionsType } from '../../store/book/book.actions'

export const BOOK_REDUCER_NODE = 'book';

export interface BookState {
  idIncrement: number;
  bookList: Book[];
}

const initialState: BookState = {
  idIncrement: 1,
  bookList: []
}
export const bookReducer = (state = initialState, action: BookActions) => {
  switch (action.type) {
    case bookActionsType.create:
      console.log(action.payload);
      
      return { 
        ...state,
        idIncrement: state.idIncrement + 1,
        bookList: [...state.bookList, {
          id: state.idIncrement,
          author: action.payload.author,
          title: action.payload.title,
          year: action.payload.year,
          pages: action.payload.pages,
        }]
      };
      case bookActionsType.delete:
        return {
          ...state,
          bookList: state.bookList.filter(book => book.id !== action.payload.id)
        };
        case bookActionsType.edit:
          return {
            ...state,
            bookList: state.bookList.map(book => book.id === action.payload.id ? {
              ...book,
              author: action.payload.event.author,
              title: action.payload.event.title,
              year: action.payload.event.year,
              pages: action.payload.event.pages
            } : book)
          };
          case bookActionsType.load:
          return {
            ...action.payload.state
          }
      default:
        return state;
  }
  
}
