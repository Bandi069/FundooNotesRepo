import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Route } from '@angular/compiler/src/core';
import { DataSharingService } from 'src/app/Services/datasharing.service';
import { NoteService } from 'src/app/Services/note.service';
import { EditlabelComponent } from '../editlabel/editlabel.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggle = true;
  status = 'Enable';

  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 6 }, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;

  constructor(
    private datasharing: DataSharingService,
    private route: Router,
    private service: NoteService,
    public dialog: MatDialog,
    media: MediaMatcher,
    Detector: ChangeDetectorRef) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => Detector.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  openDialog(): void {
    const dialog = this.dialog.open(EditlabelComponent, {
      //width: '400px',
      //height:'250px'
      //data: {name: this.name, animal: this.animal}
    });
  }
}
