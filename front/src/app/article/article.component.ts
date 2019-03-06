import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/services/blog.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommentaireService } from '../shared/services/commentaire.service';
import { LoginService } from '../shared/services/login.service';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public idReceiver = "";


  public corp: string;

  public textarea = 'add comment';
  public messages;
  public msg = { corps: '' };

  public user;
  public userName;
  public updatecorp;
  public updateState = false;
  constructor(private Message: CommentaireService, private routes: ActivatedRoute, private rt: Router, private auth: LoginService) { }

  ngOnInit() {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.idReceiver = id;


      console.log(this.idReceiver);
    });
    this.user = this.auth.userrr.user;





    this.Message.listerMessages(this.user._id,this.idReceiver).subscribe(file => {
      this.messages = file;
      console.log(file);
    });




  }


  submit() {



    this.Message.addMes(this.user._id, this.idReceiver, this.msg).subscribe(file => {
      console.log(file);
      console.log(this.msg);
      this.textarea = '';
      this.listermessages();
      this.Message.listerMessages(this.user._id,this.idReceiver).subscribe(file => {
        this.messages = file;
        console.log(file);
      });
  

    });
  }

  listermessages() {

    this.Message.listerMessages(this.user._id,this.idReceiver).subscribe(file => {
      this.messages = file;
      console.log(file);
    });

  }

}





