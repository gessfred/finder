import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faChevronCircleLeft, faEye, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faChevronCircleLeft = faChevronCircleLeft
  faEye=faEye
  faPlus = faPlusCircle

  @Input() path: Array<string>
  @Output() prev = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  previous() {
    this.prev.next()
  }

  mkdir() {

  }

}
