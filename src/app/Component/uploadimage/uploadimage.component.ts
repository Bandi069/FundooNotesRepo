import { Component, OnInit, Inject } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { DataSharingService } from 'src/app/Services/datasharing.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.scss']
})
export class UploadimageComponent implements OnInit {
  fileToUpload: File;
  filename;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(private servceobj: NoteService, private datasharing: DataSharingService,
    private bar: MatSnackBar, public dialog: MatDialogRef<UploadimageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  fileChangeEvent(event: any): void {
    this.filename = event.target.files[0].name;
    console.log(this.filename + " name");

    this.imageChangedEvent = event;
  }
  // imageCropped(event: ImageCroppedEvent) {
  //   this.croppedImage = base64ToFile(event.base64);
  //   this.fileToUpload = new File([this.croppedImage], this.filename);
  // }
  // addImage() {
  //   this.servceobj.addImage(this.data.id, this.fileToUpload).subscribe((status: any) => {
  //     if (status != null) {
  //       this.datasharing.Message();
  //       this.dialog.close();
  //       this.bar.open('Image added', '', { duration: 2000 });
  //     }
  //   });
  //}
  onNoClick() {
    this.dialog.close();
  }
}
