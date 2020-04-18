import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  notepara: any;
  email:any;
  allnotes:any;
  constructor(
    private route:Router,
    private noteser:NoteService,
   
  ) { }

  ngOnInit() {
    // this.getNotes();
    // this.route.queryParams.subscribe(params => {
    //   this.notepara = params['page'];
    //  // this.gridView=  params['view'];
    // });
  }
  getNotes(){
    this.noteser.getNote(this.email).subscribe(data => {
      console.log(data);
      this.allnotes=data;
     
    });
      }
}
