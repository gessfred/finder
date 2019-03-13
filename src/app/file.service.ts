import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  ls(path: string): Observable<string[]> {
    let escaped_path: string = path.replace(/\//g, '%2F')
    return this.http.get<string[]>(`http://localhost:8000/ls/${escaped_path}`)
   }
}
