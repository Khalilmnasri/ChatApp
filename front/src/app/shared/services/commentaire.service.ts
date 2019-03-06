import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  messages: Subject<any>;

  constructor(private http: HttpClient) {}
  sendMsg(msg) {
    this.messages.next(msg);
  }
    public addMes(idSender, idReceiver, corp){
      return this.http.post<any>('http://localhost:3001/mes/ajoutMes/'+ idSender +'/'+ idReceiver,corp);
      
    }
    
    listerMessages(idUser,idrec) {
      return this.http.get<any>('http://localhost:3001/mes/listerMes/'+idUser+'/'+idrec); 

    }

   
   }


  
   
