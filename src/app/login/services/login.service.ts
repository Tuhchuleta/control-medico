import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

const User = [
  {
    id: 1,
    nombre: 'Dr. Rafael Bautista',
    usuario: 'rbautista',
    contrasena: '123456',
    exequatur: '01-09',
  },
  {
    id: 2,
    nombre: 'Dr. Belkis Severino',
    usuario: 'bseverino',
    contrasena: '123456',
    exequatur: '02-08',
  },
];

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login(user: string, password: string): Observable<boolean> {
    const userFound = User.find(
      (userItem) =>
        userItem.usuario === user && userItem.contrasena === password
    );
    if (userFound) {
      localStorage.setItem('user', JSON.stringify(userFound));
      return of(true);
    }
    return of(false);
  }
}
