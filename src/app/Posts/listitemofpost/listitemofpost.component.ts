import { Component, OnInit,Input } from '@angular/core';
import { PostModel } from '../postModel';

@Component({
  selector: 'app-listitemofpost',
  templateUrl: './listitemofpost.component.html',
  styleUrls: ['./listitemofpost.component.css']
})

export class ListitemofpostComponent implements OnInit {

  @Input() postData:PostModel[] =[];
  constructor() { }

  ngOnInit(): void {
  }

}
