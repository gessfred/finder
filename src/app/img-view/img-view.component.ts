import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-view',
  templateUrl: './img-view.component.html',
  styleUrls: ['./img-view.component.css']
})
export class ImgViewComponent implements OnInit {

  @Input() image: string
  @Input() type: string

  constructor() { }

  ngOnInit() {
    console.log(this.image)
  }

  data(): string {
    return `data:image/${this.type};base64,${this.image}`
  }

}
