import { Directory } from './../../Directory';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() dir : Directory

  constructor() { }

  ngOnInit() {
  }

}
