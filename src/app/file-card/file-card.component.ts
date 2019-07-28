import { File } from './../../File';
import { Component, OnInit, Input } from '@angular/core';
import { faFolder, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.css']
})
export class FileCardComponent implements OnInit {
  faFolder=faFolder
  faDatabase=faDatabase
  faCode=faCode
  @Input() file: File

  constructor() { }

  ngOnInit() {
  }

}
