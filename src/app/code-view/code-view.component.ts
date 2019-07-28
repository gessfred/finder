import { Component, OnInit, Input } from '@angular/core';
import * as grammar from '../../grammar.json'
@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.css']
})
export class CodeViewComponent implements OnInit {

  @Input() code: string
  @Input() type: string
  SQLGrammar: Set<string> = new Set(grammar.sql)
  constructor() { }

  ngOnInit() {
    console.log(this.code)
  }

  styleOf(token: string, line: Array<string>): string {
    if(line[0].charAt(0) == '-') return 'comment'
    if(this.isKeyword(token)) return 'keyword'
    if(!Number.isNaN(+token)) return 'number'
    return 'text'
  }

  codeIterator(): Array<Array<string>> {
    return this.code.split('\n').map(line=> line.split(' '))
  }

  isKeyword(token: string): boolean {
    return this.SQLGrammar.has(token)
  }

}
