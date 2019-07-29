import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  escape(path: string): string {
    return path.replace(/\//g, '%2F')
  }

  ls(path: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8000/ls/${this.escape(path)}`)
   }

   cat(file: string): Observable<string> {
     return this.http.get(`http://localhost:8000/cat/${file}`, {responseType: 'text'})
   }

   mkdir(path: string): Observable<any> {
     return this.http.get(`http://localhost:8000/mkdir/${this.escape(path)}`)
   }

   stat(file: string): Observable<string> {
     return this.http.get(`http://localhost:8000/stat/${this.escape(file)}`, {responseType: 'text'})
   }

   ls_rec(path: string): Observable<any> {
     return this.http.get(`http://localhost:8000/ls-rec/${path}`)
   }

   streamImg(path: string): Observable<string> {
     return this.http.get(`http://localhost:8000/img/${path}`, {responseType: 'text'})
   }
}
