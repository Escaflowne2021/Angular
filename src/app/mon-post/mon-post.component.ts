import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-post',
  templateUrl: './mon-post.component.html',
  styleUrls: ['./mon-post.component.scss']
})
export class MonPostComponent implements OnInit {

  @Input() title: String;
  @Input() content: String;
  loveIts = 0;
  created_at = new Date();

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.loveIts++;
  }

  onBeurk(){
    this.loveIts--;
  }

}
