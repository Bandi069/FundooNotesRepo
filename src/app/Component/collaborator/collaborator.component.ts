import { Component, OnInit, Inject } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
export interface DialogData {
  //animal: string;
  //name: string;
}
@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  email: any = "";
  firstName: any = "";
  lastName: any = "";
  count: Number = 0;
  noteData : any ;
  collabData : any;
  constructor(
    public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService: NoteService,
    private snackBar: MatSnackBar) { }
  ngOnInit(
  ) { }
  addCollaborator(){
    
  }
  deletecollaborator(note){
   
  }
  //  key = new FormControl();
  // options: any = "";

  // countingcollab(count) {
  //   if (count > 2 && this.key.value) {
  //     this.noteService.(this.key.value).subscribe(
  //       data => {
  //         console.log("received  ", data);
  //         this.options = (data as any).message;
  //       },
  //       error => {
  //         console.log("received  ", error);
  //       }
  //     )
  //   }
  // }
  
}
