import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  param: any;
  labelNotes: any;
  gridView: any;
  constructor(private service: NoteService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.param = params['page'];
      this.gridView = params['view'];
      console.log(this.param);
    });
  }
  // getAllNotes() {
  //   this.service.getNote().subscribe(Response => {
  //     console.log(Response);
  //   });
  // }
  // getLabelNote()
  // {
  //   this.service.addlabel().subscribe(Response => {
  //   this.labelNotes=Response;
  //     console.log(Response);
  //   })
  // }
}