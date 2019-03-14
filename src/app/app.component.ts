import { FileService } from './file.service'
import { Component, OnInit } from '@angular/core'
import { lstat } from 'fs'
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms'
import { stringify } from '@angular/compiler/src/util'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  faChevronCircleLeft = faChevronCircleLeft
  navbar = new FormControl('')
  path: Array<string> = ['Users', 'fredericgessler']
  ngOnInit(): void {
    this.lsPath()
  }
  title = "finder"
  preview:string
  files = []
  constructor(private file: FileService) { }
  goItem(node: string) {
    //if not a file
    if(!node.includes('.')){ //think of other separators?
      this.path.push(node)
      this.lsPath()
    }
    else {
      this.cat(node)
    }
  }
  ls(path: string): void {
    console.log(`CLIENT:  ls ${path}`)
    this.file.ls(path).subscribe(f => {
      this.files=f
    })
  }
  cat(file: string): void {
    this.file.cat(`${this.getPath()}%2F${file}`).subscribe(buf => {
      console.log(`RECV:  ${buf}`)
      this.preview = buf
    })
  }
  goPrev() {
    this.path.length > 1 && (() => {
      this.path.pop()
      this.lsPath()
    })()
  }
  stringifyPath(path: Array<string>, separator: string): string {
    return path.map((x) => `${separator}${x}`).reduce((o, x) => o + x)
  }

  lsPath() {
    console.log(this.path)
    this.ls(this.getPath())
    this.navbar.setValue(this.stringifyPath(this.path, '/'))
  }
  getPath(): string {
    return this.stringifyPath(this.path, '%2F')
  }
  onEnter(e: KeyboardEvent): void {
    if(e.keyCode == 13) {
      this.path = this.navbar.value.split('/')
      this.path.shift()
      this.lsPath()
    }
  }
}
