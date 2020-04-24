import { Component, OnInit, Inject } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { NoteComponent } from '../../Component/note/note.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/note.service';
import { DataSharingService } from 'src/app/Services/datasharing.service';
export interface DialogData {
  //animal: string;
  //name: string;
}

@Component({
  selector: 'app-editlabel',
  templateUrl: './editlabel.component.html',
  styleUrls: ['./editlabel.component.scss']
})
export class EditlabelComponent implements OnInit {

  LabelName: any;
  // edit: boolean = false;
  nameLabel: any;
   //labelname: Label = new Label();
   //notes:Note=new Note();
   labelname:any;
   notes:any;
  constructor( public dialogRef: MatDialogRef<EditlabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){}
    ngOnInit(){}
  }

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('This diloge was closed');
  //     //this.animal = result;
  //   });
  // }
//   ngOnInit(): void {
    
//     this.allLabels();
//   }
//   allLabels() {
//     this.servenote.getlabel().subscribe(Response => {
//       this.LabelName = Response;
//       console.log(Response);
//     });
//   }
//   createLabels(data) {
   
//     if (data != null) {
//       this.labelname.labelname = data;
//         this.labelname.noteid = this.datasharing.labels.id;
//       this.labelname.userid=1;
//       //  this.servenote.addlabel(this.labelname).subscribe(response => {
//       //  console.log(response);
//       // });
//     }
//     else if (data == null) {
//       console.log("Label is empty..");
//      }
//   }
//   deleteLabel(id) {
//     //this.labelname.noteid = id;
//     this.servenote.deletelabel(this.labelname).subscribe(message=> {
//       console.log(message);
//     })
//     console.log("utput: " + id);
    
//   }
// }

