import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
 import { NoteService } from 'src/app/Services/note.service';
 import {DataSharingService} from 'src/app/Services/datasharing.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  userData=JSON.parse(localStorage.getItem('userData'));
  title;
  description;
  Note1 = true;
  Note2 = false;
  constructor(
    private dataSharing:DataSharingService,
    private notes:NoteService,  
    private snackbar: MatSnackBar
  ){ }
  ngOnInit() {
  }
 
  note(){
        this.Note2=true;
        this.Note1=false;
      }
      close(){
        this.Note1 = true;
        this.Note2 = false;
        if(this.title != null || this.description !=null){
          this.notes.addNote(this.title ,this.description,this.userData.email).subscribe((status)=>{
            if(status != null){
              localStorage.setItem('noteData', JSON.stringify(status));
              this.dataSharing.changeMessage(true);
              this.snackbar.open('Note added.','', {duration: 2000});
            }
          });
        }
      }
}

