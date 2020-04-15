import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataSharingService } from 'src/app/Services/datasharing.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notes: any = [];
  Archive: string = "row wrap";
  //email:any=[];
  id: any = [];
  constructor(private service: NoteService,
    private bar: MatSnackBar,
    private datascharing: DataSharingService,
    private dialog: MatDialog) { }
  ngOnInit() {
    this.getarchive(this.id);
    // this.datascharing.Message.subscribe(msg=>this.Archive=msg);
  }
  getarchive(id) {

    this.service.addArchive(id).subscribe(data => {
      console.log("Archive Note", data);
      this.notes = data['result'];
    }, error => {
      console.log(error);
    })
  }
  unarchive(note) {
    console.log(note);
    try {
      if (note.id == undefined || note.id == "") throw "note"
      var results = {
        'id': note.id,
      }
      this.service.unArchive(results).subscribe(data => {
        this.bar.open("Unarchived", "", { duration: 2000 });
        this.getarchive(this.id);
      }, error => {
        this.bar.open("not Unarchive", "", { duration: 2000 });
      })
    } catch (arr) {
      this.bar.open(arr, "", { duration: 2000 });
    }
  }
}

