import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  ls(): Observable<string[]> {
    return of(['server.js', 'secrets.jpeg'])
   }
}
