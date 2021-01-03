
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError,map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private loginFormUrl="http://localhost:8080/api/authors";
  

  constructor(private http:HttpClient) { }

  getLoginForm(json): Observable<any>{
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json; charset=utf-8')
      let options = {
        headers: httpHeaders
      }
    
  return this.http.post<any>(this.loginFormUrl, JSON.stringify(json), options).pipe(
    map((response) => {
      return response;
    }),
    catchError(this.handleError)
    )
  }

  handleError(error){
    return throwError(error.message || "Server error")

  }


  updateAuthorForm(json): Observable<any>{
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json; charset=utf-8')
      let options = {
        headers: httpHeaders
      }
    
  return this.http.post<any>('http://localhost:8080/api/authors/'+json.id, JSON.stringify(json), options).pipe(
    map((response) => {
      return response;
    }),
    catchError(this.handleErr)
    )
  }

  handleErr(error){
    return throwError(error.message || "Server error")

  }

  getAuthor(): Observable<any>{
    return this.http.get(this.loginFormUrl);
 }




  
 getOne(id):Observable<any>{
   return this.http.get('http://localhost:8080/api/authors/'+id);
 }

 getPostsByAuthors(id1,id2): Observable<any>{
   console.log(id1,id2)
  return this.http.get<any>('http://localhost:8080/api/all_authors/'+id1+'/posts/'+id2);
}

getPostsByAuthor(id): Observable<any>{
 return this.http.get<any>('http://localhost:8080/api/all_authors/'+id+'/posts/');
 }

//   updatePostsForm(json): Observable<any>{
//     let httpHeaders: HttpHeaders = new HttpHeaders();
//     httpHeaders = httpHeaders.set('Content-Type', 'application/json; charset=utf-8')
//       let options = {
//         headers: httpHeaders
//       }
    
//   return this.http.post<any>('http://localhost:8080/api/all_authors/'+json.id+'/posts/', JSON.stringify(json), options).pipe(
//     map((response) => {
//       return response;
//     }),
//     catchError(this.handleErr)
//     )
//   }

//   handleEr(error){
//     return throwError(error.message || "Server error")

//  }
  // getId(id):Observable<any>{
  //   return this.http.get<any>('http://localhost:8080/api/all_authors/'+id+'/posts/');
  // }
}
