import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu = ['Documents', 'Downloads', 'Pictures']

  @Input() stars: Array<Array<string>>

  constructor() { }

  ngOnInit() {
  }

  nameOfPath(path: Array<string>): string {
    return path[path.length-1]
  }

}
