import { FileService } from './file.service'
import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.ls()
  }
  title = "finder"
/*function() {
    console.log('ok')
  }*/
  files = []
  constructor(private file: FileService) { }

  

  ls(): void {
    this.file.ls().subscribe(f => this.files=f)
  }
}
