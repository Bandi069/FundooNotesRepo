import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { DataSharingService } from 'src/app/Services/datasharing.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
  @Input() getid;
  constructor(
    private noteser: NoteService,
    private datasharing: DataSharingService,
    private snackbar: MatSnackBar) { }
  ngOnInit() {
  }
  pinval() {
    this.noteser.Ispin(this.getid.id).subscribe((result) => {
      if (result != null) {
        this.datasharing.changeMessage(true);
        this.snackbar.open('Pinned', ' ', { duration: 2000 });
      }
    })
  }
  unpinval() {
    this.noteser.Unpin(this.getid.id).subscribe((result) => {
      if (result != null) {
        this.datasharing.changeMessage(true);
        this.snackbar.open('UnPinned', ' ', { duration: 2000 });
      }
    })
  }
}
