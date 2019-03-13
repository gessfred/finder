import { FileService } from './file.service'
import { Component, OnInit } from '@angular/core'
import { lstat } from 'fs'
import { FormControl } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  navbar = new FormControl('')
  ngOnInit(): void {
  }
  title = "finder"
/*function() {
    console.log('ok')
  }*/
  files = []
  constructor(private file: FileService) { }

  ls(path: string): void {
    console.log(`CLIENT:  ls ${path}`)
    this.file.ls(path).subscribe(f => {
      this.files=f
    })
  }

  onEnter(e: KeyboardEvent): void {
    if(e.keyCode == 13) {
      this.ls(this.navbar.value)
    }
  }
}
