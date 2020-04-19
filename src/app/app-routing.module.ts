import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Component/login/login.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { NoteComponent } from './Component/note/note.component';
import { IconsComponent } from './Component/icons/icons.component';
import { ArchiveComponent } from './Component/archive/archive.component';
import { ReminderComponent } from './Component/reminder/reminder.component';
import { DisplaynoteComponent } from './Component/displaynote/displaynote.component';
import { GetnoteComponent } from './Component/getnote/getnote.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
 //{ path: 'arch', component: ArchiveComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'note', component: NoteComponent },
      {path : 'arch',component:ArchiveComponent},
      {path : 'reminder',component:ReminderComponent},
      //{path:'trash',component:TrashComponent},
      {path:'notedisplay',component:DisplaynoteComponent},
      {path :'getnote',component:GetnoteComponent}
    ]
  }
  //{path : 'icon', component: IconsComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
