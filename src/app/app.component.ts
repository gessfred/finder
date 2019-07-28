import { Path } from './../Path';
import { Directory } from './../Directory';
import { FileService } from './file.service'
import { Component, OnInit } from '@angular/core'
import { lstat } from 'fs'
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms'
import { stringify } from '@angular/compiler/src/util'
import { faChevronCircleLeft, faEye, faPlusCircle, faTintSlash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  dirmk: boolean = false
  navbar = new FormControl('')
  path: Path = new Path(['Users', 'fredericgessler', 'Documents', 'ba6', 'db', 'hands-on'])
  ngOnInit(): void {
    this.ls()
    this.ls_rec()
  }
  title = "finder"
  files_unfiltered = []
  files = []
  visible: boolean
  directory: Directory = new Directory('', [])
  favourites: Array<Array<string>> = []
  constructor(private fs: FileService) { }
  goItem(node: string) {
    console.log(node)
    //if not a file
    if(!node.includes('.')){ //think of other separators?
      this.path.cd(node)
      this.ls()
    }
  }
  ls(): void {
    console.log(`ls ${this.getPath()}`)
    //this.fs.ls(this.getPath()).subscribe(f => this.directory.from(f))
    this.ls_rec()
  }
  ls_rec(): void {
    this.fs.ls_rec(this.getPath()).subscribe(f => this.directory.from(f))
  }
  goPrev() {
    this.path.back()
    this.ls()
  }

  getPath(): string {
    return this.path.stringify('%2F')
  }
  toggleDots(visible: boolean) {
    this.directory.toggleDots()
  }
  getStars(): Array<Array<string>> {
    return this.favourites
  }
}










//<input type="text" class="navbar" [formControl]="navbar" (keydown)="onEnter($event)">
/*
<div *ngIf='file_preview == f' class="preview">
            <pre><code>{{this.preview}}</code></pre>
        </div>
*/ 