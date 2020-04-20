import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatRippleModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { NoteComponent } from './Component/note/note.component';
import { IconsComponent } from './Component/icons/icons.component';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DisplaynoteComponent } from './Component/displaynote/displaynote.component'; 
//import { HttpModule } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AccountService } from './Services/account.service';
import { NoteService } from './Services/note.service';
import { ArchiveComponent } from './Component/archive/archive.component';
import { ReminderComponent } from './Component/reminder/reminder.component';
import { GetnoteComponent } from './Component/getnote/getnote.component';
import { CardComponent } from './Component/card/card.component';
import { TrashComponent } from './Component/trash/trash.component';
import { EditNoteComponent } from './Component/edit-note/edit-note.component';

 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NoteComponent,
    IconsComponent,
    DisplaynoteComponent,
    ArchiveComponent,
    ReminderComponent,
    GetnoteComponent,
    CardComponent,
    TrashComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    HttpClientModule,
     //   HttpModule,
    //FormControl,
    //FormGroup,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatSnackBarModule,
    RouterModule.forRoot([])
  ],
  providers: [AccountService,NoteService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
