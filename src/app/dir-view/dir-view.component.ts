import { File } from './../../File';
import { Component, OnInit, Input } from '@angular/core';
import { faFolder } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-dir-view',
  templateUrl: './dir-view.component.html',
  styleUrls: ['./dir-view.component.css']
})
export class DirViewComponent implements OnInit {
  faFolder=faFolder
  @Input() content: Array<string>
  constructor() { }

  ngOnInit() {
  }

}
