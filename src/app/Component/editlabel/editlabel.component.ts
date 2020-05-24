import { Component, OnInit, Inject } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { NoteComponent } from '../../Component/note/note.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/note.service';
import { DataSharingService } from 'src/app/Services/datasharing.service';
export interface DialogData {
}

@Component({
  selector: 'app-editlabel',
  templateUrl: './editlabel.component.html',
  styleUrls: ['./editlabel.component.scss']
})
export class EditlabelComponent implements OnInit {

  LabelName: any;
  nameLabel: any;
  labelname: any;
  notes: any;
  constructor(public dialogRef: MatDialogRef<EditlabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  ngOnInit() { }
}


