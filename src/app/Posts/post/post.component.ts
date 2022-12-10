import { Component, Inject, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

    titleName:string="";
    content:string="";
    
    @Output() postAdded = new EventEmitter();

    constructor(private routerService:Router)
    {
       
    }
    upload():void
    {
      this.postAdded.emit({title:this.titleName,content:this.content});
        console.log("upload button has clicked");
    }
    

}
