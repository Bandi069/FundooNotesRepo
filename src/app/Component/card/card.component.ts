import { Component, OnInit } from '@angular/core';
import {NoteComponent } from 'src/app/Component/note/note.component';
import { NoteService } from 'src/app/Services/note.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
// notedata: Note=new Note();
  constructor( private service :NoteService ) { }

  ngOnInit() {}
//     updateNote(id,title, description) {
//       debugger;
//      // this.notedata.email=Email;
//       this.notedata.Id=id;
//       this.notedata.Description=description;
//       this.notedata.Title=title;
//       // console.log(this.passData);
//       this.service.updateNote(id, title, description).subscribe(response => {
//         window.location.reload();
//         console.log(response);
//       });
// 
}
