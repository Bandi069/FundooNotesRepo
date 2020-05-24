import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/Model/notes.model';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  color: Note = new Note();
  notepara: any;
  email: any;

  labelNotes: any;
  gridView: any;
  result: any;
  constructor(
    private router: Router,
    private noteser: NoteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.getNote();
    this.route.queryParams.subscribe(params => {
      this.notepara = params['page'];
      this.gridView = params['view'];
    });
  }
  getNote() {
    // debugger;
    this.noteser.getallnote().subscribe(response => {
      console.log(response);
      this.result = response;
      console.log(this.result);
    });
  }
}
