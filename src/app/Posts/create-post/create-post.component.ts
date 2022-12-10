import { Component, OnInit } from '@angular/core';
import { PostModel } from '../postModel';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public postmodel:PostModel[] = [];

  public count:number=0;

  

  constructor() { }

  ngOnInit(): void {
  }

  showList(postmodel:PostModel)
  {
    this.postmodel.push(postmodel);
    this.count++;

  }

}
