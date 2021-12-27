
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  getCharacters(URL: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  public getData(url:string){
    return this.http.get(url)
  }

}
