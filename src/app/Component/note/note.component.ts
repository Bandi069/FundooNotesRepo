import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/Services/note.service';
import { DataSharingService } from 'src/app/Services/datasharing.service';
import { Note } from 'src/app/Model/notes.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  // userData = JSON.parse(localStorage.getItem('userData'));
 title;
  description;
  userData=JSON.parse(localStorage.getItem('userData'));
  Note1 = true;
  Note2 = false;
  allNotes: any;
  changeColor: string;
  value: boolean = false;
  time = "8:00 AM";
  repeat = "daily";
  day = "Today";
  @Input() reminder: any;
  constructor(
    private dataSharing: DataSharingService,
    private noteser: NoteService,
    private snackbar: MatSnackBar
  ) { }
  
  ngOnInit() {
  }
  note(){
    this.Note2=true;
    this.Note1=false;
  }
  
  close() {
    // this.Note2 = true;
    debugger;
    if (this.title != null || this.description != null) {
      const data={
        title:this.title,
        description:this.description,
      }
      console.log(data);
      this.noteser.addNote(data).subscribe((status) => {
        if (status != null) {
          localStorage.setItem('noteData', JSON.stringify(status));
          this.snackbar.open('New note added', '', { duration: 2000 });
        }
      });
    }
    this.Note2 = false;
  }
  getNote() {
    //debugger;
    this.noteser.getallnote().subscribe((status :any)=>{
      this.allNotes=status;
    });
  }
  receiveSetColorEvent($event){
    this.setColor=$event;
    console.log(this.setColor);
  }
  setColor(Color) {
    this.changeColor = Color;
  }
  
  listOfColors = [
    [
      { color: "rgb(255, 179, 255)", name: "pink" },
      { color: "rgb(255, 255, 128)", name: "darkGolden" },
      { color: "rgb(200, 232, 104)", name: "yellow" },
      { color: " rgb(158, 136, 191)", name: "darkYellow" }
    ],
    [
      { color: "slategray", name: "grey" },
      { color: "rgb(153, 221, 255)", name: "Teal" },
      { color: "rgb(203,240,248)", name: "blue" },
      { color: "rgb(174,203,250)", name: "Dark blue" },
    ],
    [
      { color: "rgb(255, 153, 0)", name: "orange" },
      { color: "rgb(97, 191, 82)", name: "green" },
       { color: "white", name: "white" },
      { color: " rgb(196,174,251)", name: "purpule" }
    ]
  
  ]
  save(date) {
    let str: any;
    if (date != "") {
      let v = new Date(date);
      str = v.toDateString();
    }
    else str = this.day;
    this.reminder = str + " " + this.time;
  }
}
   