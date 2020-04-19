import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Services/note.service';

@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})
export class GetnoteComponent implements OnInit {
  reminderData: any = "";
  setColor = '#FFFFF';
  isArchive: any = false;
  value: boolean = false;
  constructor(private serviceobject:NoteService,
    
    private bar:MatSnackBar) { }

  ngOnInit() {
  }

}
