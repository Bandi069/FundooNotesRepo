import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataSharingService } from 'src/app/Services/datasharing.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notes:any=[];
  Archive:string="row wrap";
  email:any=[];
  constructor(private serviceobj:NoteService,private bar:MatSnackBar,private datascharing:DataSharingService,private dialog:MatDialog) { }
  ngOnInit() {
    this.getarchive();
    this.datascharing.Message.subscribe(msg=>this.Archive=msg);
  }
  getarchive(){
    this.serviceobj.getArchive(email).subscribe(data=>{
      console.log("Archive Note",data);
      this.notes=data['result'];
    },error=>{
      console.log(error);
    })
 }
}
