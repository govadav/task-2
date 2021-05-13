import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, undoRemoveFromReadingList,} from '@tmo/books/data-access';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(public readonly store: Store,private snackBar: MatSnackBar) {}

  removeFromReadingList(item) { 
   
    const snackBarRef = this.snackBar.open('Book Removed', 'Undo');
    snackBarRef.onAction().subscribe(() => {
      this.store.dispatch(undoRemoveFromReadingList({item}));
    });
    this.store.dispatch(removeFromReadingList({ item }));
  }
}
