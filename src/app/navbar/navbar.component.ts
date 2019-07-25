import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faChevronLeft, faEye, faPlus, faEyeSlash, faStar } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faChevronCircleLeft = faChevronLeft
  faEye=faEye
  faPlus = faPlus
  faEyeSlash = faEyeSlash
  faStar = faStar
  @Input() path: Array<string>
  @Output() prev = new EventEmitter()
  @Output() hid = new EventEmitter<boolean>()
  @Output() save = new EventEmitter()
  isDotHidden=false
  constructor() { }

  ngOnInit() {
    this.hid.emit(this.isDotHidden)
  }

  previous() {
    this.prev.next()
  }

  mkdir() {

  }

  hide() {
    this.isDotHidden = !this.isDotHidden
    this.hid.emit(this.isDotHidden)
  }

  savePath() {
    this.save.emit()
  }
}
