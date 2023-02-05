import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

const User = [
  {
    id: 1,
    nombre: 'Dra. Nathaly Beltre Pérez',
    usuario: 'nathaly.beltre',
    contrasena: '1234',
    exequatur: '256-16',
  },
  {
    id: 2,
    nombre: 'Dra. Iris Siomara Montero Montero',
    usuario: 'iris.montero',
    contrasena: '1234',
    exequatur: '671-10',
  },
  {
    id: 3,
    nombre: 'Dr. Víctor Manuel Pérez de Jesús',
    usuario: 'victor.perez',
    contrasena: '1234',
    exequatur: '432-12',
  },
  {
    id: 4,
    nombre: 'Dr. Ernesto Dotel Núñez',
    usuario: 'ernesto.dotel',
    contrasena: '1234',
    exequatur: '242-98',
  },
  {
    id: 5,
    nombre: 'Dr. Héctor Danilo Pérez',
    usuario: 'hector.perez',
    contrasena: '1234',
    exequatur: '1520-83',
  },
  {
    id: 6,
    nombre: 'Dr. Héctor D. Guerra Capellán',
    usuario: 'hector.guera',
    contrasena: '1234',
    exequatur: '*******',
  },
  {
    id: 7,
    nombre: 'Dra. Isabel María Olivares Gil',
    usuario: 'isabel.olivares',
    contrasena: '1234',
    exequatur: '375-04',
  },
  {
    id: 8,
    nombre: 'Dra. Berta Roberto',
    usuario: 'berta.roberto',
    contrasena: '1234',
    exequatur: '435-07',
  },
  {
    id: 9,
    nombre: 'Dr. Héctor David Polanco Santana',
    usuario: 'hector.polanco',
    contrasena: '1234',
    exequatur: '48-05',
  },
  {
    id: 10,
    nombre: 'Dra. Belkis Severino',
    usuario: 'Belkis.Severino',
    contrasena: '1234',
    exequatur: '2727-83',
  },
  {
    id: 11,
    nombre: 'Dr. Euclides Tineo Santos',
    usuario: 'euclides.santos',
    contrasena: '1234',
    exequatur: '279-98',
  },
  {
    id: 12,
    nombre: 'Dra. Lucy Esther Alcántara',
    usuario: 'lucy.alcantara',
    contrasena: '1234',
    exequatur: '449-98',
  },
  {
    id: 13,
    nombre: 'Dra. Mileidy Almonte de Los Santos',
    usuario: 'mileidy.almonte',
    contrasena: '1234',
    exequatur: '4910',
  },
  {
    id: 14,
    nombre: 'Dra. Radaysa Montilla',
    usuario: 'radaysa.montilla',
    contrasena: '1234',
    exequatur: '473-10',
  },
  {
    id: 15,
    nombre: 'Dra. Sandra María Jiménez',
    usuario: 'sandra.jimenez',
    contrasena: '1234',
    exequatur: '435-07',
  },
  {
    id: 16,
    nombre: 'Dr. Fidencio M. Pérez Ogando',
    usuario: 'fidencio.perez',
    contrasena: '1234',
    exequatur: '466-09',
  },
  {
    id: 17,
    nombre: 'Dra. Yvelisse Zusana Castro Reynoso',
    usuario: 'yvelisse.castro',
    contrasena: '1234',
    exequatur: '480-05',
  },
  {
    id: 18,
    nombre: 'Dr. Juan Francisco Solano Martínez',
    usuario: 'juan.solano',
    contrasena: '1234',
    exequatur: '23-93',
  },
  {
    id: 19,
    nombre: 'Dra. Paola Del Carmen Veras',
    usuario: 'paola.delcarmen',
    contrasena: '1234',
    exequatur: '725-09',
  },
  {
    id: 20,
    nombre: 'Dra. Elsa Lidia Mercedes Mercedes',
    usuario: 'elsa.mercedes',
    contrasena: '1234',
    exequatur: '750-11',
  },
  {
    id: 21,
    nombre: 'Dr. Elvert Calderón Abreu',
    usuario: 'elvert.calderon',
    contrasena: '1234',
    exequatur: '141-17',
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
