//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/Services/note.service';
import { DataSharingService } from 'src/app/Services/datasharing.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() data;
  notes = [];
  constructor(private dataSharing: DataSharingService,
    public dialog: MatDialog,
    private note: NoteService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.note = this.data;
  }
  Colors = [
    { colorCode: '#FFFFFF', name: 'Default' },
    { colorCode: '#FF0000', name: 'Red' },
    { colorCode: '#FFA500', name: 'Orange' },
    { colorCode: '#808080', name: 'Gray' },
    { colorCode: '#800080', name: 'Purple' },
    { colorCode: '#FFC0CB', name: 'Pink' },
    { colorCode: '#0000FF', name: 'Blue' },
    { colorCode: '#0000A0', name: 'Dark blue' },
    { colorCode: '#A52A2A', name: 'Brown' },
    { colorCode: '#008000', name: 'Green' },
    { colorCode: '#FFFF00', name: 'Yellow' },
    { colorCode: '#008080', name: 'Teal' }
  ];
  Remainder8PM() {
    this.note.addRemainder(this.data.id, "Today, 8:00 PM").subscribe((status) => {
      if (status != null) {
        this.dataSharing.changeMessage(true);
        this.snackBar.open('Remainder added.', '', { duration: 2000 });
      }
    });
  }
  Remainder8AM() {
    this.note.addRemainder(this.data.id, "Tomorrow, 8:00 AM").subscribe((status) => {
      if (status != null) {
        this.dataSharing.changeMessage(true);
        this.snackBar.open('Remainder added.', '', { duration: 2000 });
      }
    });
  }
 Archive() {
    this.note.addArchive(this.data.id).subscribe((status) => {
      if (status != null) {
        this.dataSharing.changeMessage(true);
        this.snackBar.open('Added archive.', '', { duration: 2000 });
      }
    });
  }
 unArchive() {
    this.note.unArchive(this.data.id).subscribe((status) => {
      if (status != null) {
        this.dataSharing.changeMessage(true);
        this.snackBar.open('Removed from archive.', '', { duration: 2000 });
      }
    });
  }
  addTrash() {
    this.note.addTrash(this.data.id).subscribe((status) => {
      if (status != null) {
        this.dataSharing.changeMessage(true);
        this.snackBar.open('Added to trash.', '', { duration: 2000 });
      }
    });
  }

  updatecolor(index) {
    this.note.addColor(this.data.id, this.Colors[index].name).subscribe((status) => {
      if (status != null) {
        this.dataSharing.changeMessage(true);
        console.log("color added");
      }
    });
  }
}
