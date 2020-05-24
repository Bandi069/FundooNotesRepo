import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
//import { DialogData } from '../editlabel/editlabel.component';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
export interface DialogData {

}
@Component({
  selector: 'app-pickreminder',
  templateUrl: './pickreminder.component.html',
  styleUrls: ['./pickreminder.component.scss']
})
export class PickreminderComponent implements OnInit {

  constructor(
    private noteServices: NoteService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  date = new FormControl('');
  time = new FormControl('');
  // @Output() reminderEventForCards = new EventEmitter<any>();
  //@Output() reminderEvent = new EventEmitter<any>();
  ngOnInit() {
  }
  savefun() {
    // const reminderData = this.date.value.toLocaleDateString() + "," + " " + this.time.value
    // console.log("reminder: ", reminderData)
    // this.reminderEvent.emit(reminderData);
    // this.reminderEventForCards.emit(reminderData);
  }
}
