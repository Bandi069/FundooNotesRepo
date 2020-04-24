import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {

  constructor(
    private serviceobj:NoteService,
    private snackbar:MatSnackBar,
    private datasharing:DataSharingService) { }
  ngOnInit() {
  }

}
