import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class Punto1Service {

  constructor(private _http: HttpClient) { }

  public getTranslate():Observable<any>{
    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
    'X-RapidAPI-Host': 'systran-systran-platform-for-language-processing-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '8d5a49752amsha9db5e0fcdd92b4p196487jsn9bf10c09b513'
    })
    };
    return this._http.get("https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate", httpOptions);
    }
   
}
