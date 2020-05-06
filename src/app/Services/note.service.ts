import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private http: HttpClient) { }

  addNote(title, description, email){
    const parameters={
      Title :title,
      Description : description,
      Email : email
    };
   return this.http.post(environment.Url +'addnote', parameters);
  }

  updateNote(id, title, description, email) {
    const params={
      Id: id,
      Title :title,
      Description:description,  
      Email:email
    };
    return this.http.put(environment.Url+'updatenote',params);
  }

  addArchive(id){
    return this.http.put(environment.Url +'Archive'+ id ,null);
  }

  unArchive(id){
    return this.http.put(environment.Url +'unArchive?id='+ id ,null);
  }

  addTrash(id){
    return this.http.put(environment.Url +'Trash?id='+ id ,null);
  }

  addColor(id,value){
    const url =environment.Url +'color?id='+ id +'&color='+ value;   
    return this.http.put(url,null);
  }
  
  getNote(email){
    
    return this.http.get(environment.Url+ 'getNote?email='+email);
  }
  getNoteList(){
    return this.http.get(environment.Url+ 'getList');
  }

  addRemainder(id,remainder){
 return this.http.put(environment.Url+ 'setRemainder?id='+id+'&remainder='+remainder, null);
  }
  removeRemainder(id){
    return this.http.put(environment.Url+ 'removeRemainder?id='+id, null);
  }
  getArchive(email){
    return this.http.get(environment.Url+'getArchive?email='+email);
  }

  getTrash(email){
    return this.http.get(environment.Url+'getTrash?email='+email);
  }
  getRemainder(email){
    return this.http.get(environment.Url+'getRemainders?email='+email);
  }
  delete(id){
    return this.http.delete(environment.Url+'removeNotes?id='+id);
  }
  restore(id){
    return this.http.put(environment.Url+'restore?id='+id, null);
  }
  deleteAll(email){
    return this.http.delete(environment.Url+'deleteAll?email='+email);
  }
  restoreAll(email){
    return this.http.put(environment.Url+'restoreAll?email='+email, null);
  }
   Ispin(id) {
    return this.http.put(environment.Url + 'Ispin?id='+ id, id);
  }
  
  Unpin(id) {
    return this.http.put(environment.Url+ 'Unpin?id='+ id, id);
  }
  addlabel(id,name,userid) {
    
    return this.http.post(environment.Url + 'AddLabel'+id + '&name=' + name +'&userid='+ userid, null);
  }
  deletelabel(id) {
    return this.http.delete(environment.Url + 'Deletelabel'+ id);
  }
  getlabel() {
    return this.http.get(environment.Url+ 'getlabel');
  }
}