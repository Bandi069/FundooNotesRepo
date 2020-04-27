import { Component, OnInit, Inject } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  constructor(
    public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService: NoteService,
    private snackBar: MatSnackBar) { }
  ngOnInit(
  ) { }
  addCollaborator(){
    
  }
}
