import { Component, OnInit, Inject } from '@angular/core';
//import { DialogData } from '../editlabel/editlabel.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  
}
@Component({
  selector: 'app-pickreminder',
  templateUrl: './pickreminder.component.html',
  styleUrls: ['./pickreminder.component.scss']
})
export class PickreminderComponent implements OnInit {

  constructor( 
    @Inject(MAT_DIALOG_DATA) public data:any   ) { }
    
  ngOnInit() {
  }
}
