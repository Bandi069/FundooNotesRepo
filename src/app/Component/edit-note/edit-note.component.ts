import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataSharingService } from 'src/app/Services/datasharing.service';
import { NoteService } from 'src/app/Services/note.service';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
// note=any;
color:any;
  constructor(private noteser:NoteService,
    private datasharing:DataSharingService,
    private dialog:MatDialog) { }

  ngOnInit() {
  }
  Updatenote(note)
  {
    console.log("AllNotes"+note);
    if(note.isbin!=true)
    {
      const Ref=this.dialog.open(NoteComponent,{
        data:{note:note},
        panelClass:'custom-dialog-container'
      });
      Ref.afterClosed().subscribe(result=>{
        note=result;
      });
    }
    else{
      console.log("cont edit");
    }
  }
  deleteReminder(id){
    this.color.id=id;
    this.noteser.removeRemainder(this.color).subscribe(Response=>{
      console.log(Response);
    })
    window.location.reload();
  }
}
