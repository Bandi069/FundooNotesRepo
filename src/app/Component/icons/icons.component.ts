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
  @Input() value:any;
  //@Input() notes=any;
  @Output() setColorEvent=new EventEmitter<any>();
  //notes = [];
  //color:Note=new Note();
  allreminder:any;

  constructor(private dataSharing: DataSharingService,
    public dialog: MatDialog,
    private noteserve: NoteService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.noteserve = this.data;
  }

  Colors = [
    [
    { colorCode: '#FFFFFF', name: 'Default' },
    { colorCode: '#FF0000', name: 'Red' },
    { colorCode: '#FFA500', name: 'Orange' },
    { colorCode: '#808080', name: 'Gray' },
    ],
    [
    { colorCode: '#800080', name: 'Purple' },
    { colorCode: '#FFC0CB', name: 'Pink' },
    { colorCode: '#0000FF', name: 'Blue' },
    { colorCode: '#0000A0', name: 'Dark blue' },
  ],
  [
    { colorCode: '#A52A2A', name: 'Brown' },
    { colorCode: '#008000', name: 'Green' },
    { colorCode: '#FFFF00', name: 'Yellow' },
    { colorCode: '#008080', name: 'Teal' }
  ]
  ];
  setcolor(id,changeColor)
  {
    this.setColorEvent.emit("done");
    this.noteserve.addColor(id,changeColor).subscribe(Response=>{console.log(Response)});
  }
  reminderDialog() {

  //  allreminder:localStorage.getItem('allreminder');
    const dialog = this.dialog.open(PickreminderComponent, {
      data:{labels:this.allreminder},
     // height: '173px',
    //width: '373px',
    //  width: '250px',
    //  height:'150px'
     // data: {name: this.name, animal: this.animal}
   });
    dialog.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
    //this.animal = result;
     });
  }
  openCollabDialog(coll) {
    const dialog = this.dialog.open(CollaboratorComponent, {
      autoFocus: false,
      data:coll,
     // width:'250px',
      //height:'250px'
    });
   dialog.afterClosed().subscribe(result=>{
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
