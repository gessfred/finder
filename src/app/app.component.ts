import { FileService } from './file.service'
import { Component, OnInit } from '@angular/core'
import { lstat } from 'fs'
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms'
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  navbar = new FormControl('')
  path: Array<string> = ['Users', 'fredericgessler']
  ngOnInit(): void {
    this.lsPath()
  }
  title = "finder"

  files = []
  constructor(private file: FileService) { }
  goItem() {

  }
  ls(path: string): void {
    console.log(`CLIENT:  ls ${path}`)
    this.file.ls(path).subscribe(f => {
      this.files=f
    })
  }

  stringifyPath(path: Array<string>, separator: string): string {
    return path.map((x) => `${separator}${x}`).reduce((o, x) => o + x)
  }

  lsPath() {
    console.log(this.path)
    this.ls(this.stringifyPath(this.path, '%2F'))
    this.navbar.setValue(this.stringifyPath(this.path, '/'))
  }

  onEnter(e: KeyboardEvent): void {
    if(e.keyCode == 13) {
      this.path = this.navbar.value.split('/')
      this.path.shift()
      this.lsPath()
    }
  }
}
