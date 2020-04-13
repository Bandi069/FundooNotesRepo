import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; 



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Query:MediaQueryList;
      nav=Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

      private QueryListener: () => void;
      parentSubject: Subject<any> = new Subject();
  constructor( private roter:Router,
    public dialog:MatDialog,
    media:MediaMatcher,
    Deactor:ChangeDetectorRef,) {
      this.Query=media.matchMedia('(max-width:500px)');
       this.QueryListener=()=>Deactor.detectChanges();
       this.Query.addListener(this.QueryListener);
   
  }
  ngOnInit() {}
  ngOnDestory():void{
    this.Query.removeListener(this.QueryListener);
  }
  
  
}
