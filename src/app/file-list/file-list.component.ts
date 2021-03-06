import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Directory } from 'src/Directory';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  @Input() dir: Directory
  @Output() go = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  goItem(file: string) {
    this.go.emit(file)
  }

}
