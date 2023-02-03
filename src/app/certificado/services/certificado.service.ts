import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  certificados: any[] = [];

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

  getEstado(): Observable<any> {
    return this.http.get<any>('api/Estado').pipe(map((result) => result));
  }

  getList(): Observable<any> {
    return this.http.get<any>('api/List').pipe(map((result) => result));
  }

  getCertificados() {
    if (!localStorage.getItem('certificados')) {
      this.getList().subscribe({
        next: (data) => {
          this.certificados = data;
          localStorage.setItem(
            'certificados',
            JSON.stringify(this.certificados)
          );
        },
        error: (error) => console.log(error),
      });

      return this.certificados;
    }

    this.certificados = JSON.parse(
      localStorage.getItem('certificados') as string
    );

    return this.certificados;
  }

  createCertificado(certificado: any) {
    delete certificado.images.agresion.path;
    delete certificado.images.perfil.path;

    let certificados: any[] = [];

    if (!localStorage.getItem('certificados')) {
      certificados.push(certificado);
      localStorage.setItem('certificados', JSON.stringify(certificados));
      return;
    }

    certificados = JSON.parse(localStorage.getItem('certificados') as string);
    certificados.push(certificado);
    localStorage.setItem('certificados', JSON.stringify(certificados));
  }
}
