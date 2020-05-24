import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataSharingService } from 'src/app/Services/datasharing.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  //msg : String = "row wrap";
  //noteid=any;
  constructor(
    private noteservice: NoteService,
    private datasharing: DataSharingService,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit() {
    //this.deleteTrash();
    //this.datasharing.Message.subscribe(message =>   this.msg = message);
  }
  // deleteTrash(){    
  //   this.noteservice.deleteAll(noteid).subscribe(
  //     data => {
  //      console.log("data at trash", data);
  //      this.deleteTrash();
  //     },
  //     error => {
  //       console.log("error at trash", error);
  //     }
  //   )
  // }

}
