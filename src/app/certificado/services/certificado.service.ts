import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  constructor(private http: HttpClient) {}

  getAspectoLegal(): Observable<any> {
    return this.http.get<any>('api/AspectoLegal').pipe(map((result) => result));
  }

  getConclusion(): Observable<any> {
    return this.http.get<any>('api/Conclusion').pipe(map((result) => result));
  }

  getJurMedica(): Observable<any> {
    return this.http.get<any>('api/JurMedica').pipe(map((result) => result));
  }

  getReferido(): Observable<any> {
    return this.http.get<any>('api/Referido').pipe(map((result) => result));
  }

  getList(): Observable<any> {
    return this.http.get<any>('api/List').pipe(map((result) => result));
  }
}
