import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  title;
  description;
  card1 = true;
  card2 = false;
  constructor(){ }
  ngOnInit() {
  }
  note(){
    this.card2=true;
    this.card1=false;
  }
}
