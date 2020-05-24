//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/Services/note.service';
import { DataSharingService } from 'src/app/Services/datasharing.service';
import { EventEmitter } from '@angular/core';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { PickreminderComponent } from '../pickreminder/pickreminder.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() data;
  @Input() value: any;
  //@Input() notes=any;
  @Output() setColorEvent = new EventEmitter<any>();
  notes = [];
  //color:Note=new Note();
  allreminder: any;
  noteColor: string;

  constructor(private dataSharing: DataSharingService,
    public dialog: MatDialog,
    private noteserve: NoteService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.noteserve = this.data;
  }
  colors = [
    [
      { color: "#FFFFFF", name: "Default Color" },
      { color: "rgb(137,207,240)", name: "Blue" },
      { color: "rgb(75,0,130)", name: "Indigo" },
      { color: "rgb(167,252,0)", name: "Green" }
    ],
    [
      { color: "#FF0000", name: "Red" },
      { color: "rgb(0,198,128)", name: "Teal" },
      { color: "rgb(255,215,0)", name: "Yellow" },
      { color: "rgb(181,126,220)", name: "Violet" }
    ],
    [
      { color: "rgb(0,255,255)", name: "Cyan" },
      { color: "rgb(253,108,158)", name: "Pink" },
      { color: "rgb(150,75,0)", name: "Brown" },
      { color: "rgb(128,128,128)", name: "Gray" }
    ]
  ]

  setColor(changeColor) {
    this.setColorEvent.emit(changeColor);
    this.noteserve.addColor(this.notes, changeColor).subscribe((result) => {
      console.log(result);
      this.snackBar.open('color chaged ', 'Dismiss', { duration: 3000 });

    },
      (error) => {
        console.log('error respons', error);
        this.snackBar.open('error ', 'Dismiss', { duration: 3000 });
      });

  }

  reminderDialog() {

    const dialog = this.dialog.open(PickreminderComponent, {
      data: { labels: this.allreminder },
      // height: '173px',
      //width: '373px',
    });
    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openCollabDialog(coll) {
    const dialog = this.dialog.open(CollaboratorComponent, {
      autoFocus: false,
      data: coll,
    });
    dialog.afterClosed().subscribe(result => {
      console.log('dialog closed');
    });
  }

  Remainder8PM() {
    this.noteserve.addRemainder(this.data.id, "Today, 8:00 PM").subscribe((status) => {
      if (status != null) {
        this.dataSharing.changeMessage(true);
        this.snackBar.open('Remainder added.', '', { duration: 2000 });
      }
    });
  }
  Remainder8AM() {
    this.noteserve.addRemainder(this.data.id, "Tomorrow, 8:00 AM").subscribe((status) => {
      if (status != null) {
        this.dataSharing.changeMessage(true);
        this.snackBar.open('Remainder added.', '', { duration: 2000 });
      }
    });
  }
  Archive() {
    this.noteserve.addArchive(this.data.id).subscribe((status) => {
      if (status != null) {
        this.dataSharing.changeMessage(true);
        this.snackBar.open('Added archive.', '', { duration: 2000 });
      }
    });
  }
  unArchive() {
    this.noteserve.unArchive(this.data.id).subscribe((status) => {
      if (status != null) {
        this.dataSharing.changeMessage(true);
        this.snackBar.open('Removed from archive.', '', { duration: 2000 });
      }
    });
  }
  addTrash() {
    this.noteserve.addTrash(this.data.id).subscribe((status) => {
      if (status != null) {
        this.dataSharing.changeMessage(true);
        this.snackBar.open('Added to trash.', '', { duration: 2000 });
      }
    });
  }

  // updatecolor(index) {
  //   this.note.addColor(this.data.id, this.Colors[index].name).subscribe((status) => {
  //     if (status != null) {
  //       this.dataSharing.changeMessage(true);
  //       console.log("color added");
  //     }
  //   });
  // }
}
