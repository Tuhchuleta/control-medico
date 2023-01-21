import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  constructor() {}

  createDb() {
    const AspectoLegal = [
      { id: 1, name: 'transito' },
      { id: 2, name: 'rinas' },
      { id: 3, name: 'agresion fisica' },
      { id: 4, name: 'codigo menor' },
      { id: 5, name: 'ley 24-97' },
      { id: 6, name: 'asalto' },
      { id: 7, name: 'otros' },
    ];

    const JurMedica = [
      { id: 1, name: 'Violación' },
      { id: 2, name: 'Fractura' },
      { id: 3, name: 'Sustancia Irritante' },
      { id: 4, name: 'Arma de Fuego' },
      { id: 5, name: 'Arma Blanca' },
      { id: 6, name: 'Objeto Contundente' },
      { id: 7, name: 'Otros' },
    ];

    const Referido = [
      { id: 1, name: 'de la Comandancia de la FF. AA.' },
      { id: 2, name: 'de la Comandancia de la Fuerza Aerea Dom' },
      { id: 3, name: 'de la Comandancia de la Marina de Guerra' },
      { id: 4, name: 'de la Comandancia de la Policia Nacional' },
      { id: 5, name: 'del Departamento de Homicidios de la PN ' },
      { id: 6, name: 'del Juez de Instrucción' },
      { id: 7, name: 'de la Comisión Investigadora' },
    ];

    const Conclusion = [
      {
        id: 1,
        name: 'Estas Lesiones curaran dentro de un periodo 1 a 10 Dias',
      },
      {
        id: 2,
        name: 'Estas Lesiones curaran dentro de un periodo 10 a 20 Dias',
      },
      {
        id: 3,
        name: 'Estas Lesiones curaran dentro de un periodo 20 a 30 Dias',
      },
      { id: 4, name: 'No se Aprecian Lesiones Físicas Actuales ' },
      { id: 5, name: 'En Observacion Médica' },
    ];

    const List = [
      {
        id: 1,
        nombres: 'Noely',
        apellidos: 'Pena Ramirez',
        cedula: '001-1752469-4',
        fechaNacimiento: '',
        sexo: 'f',
        residencia: {
          direccion: 'Calle San Juan de la Maguana #42',
          sector: 'cristorey',
          municipio: 'Distrito Nacional',
          codigoPostal: '10501',
        },
        contatos: {
          telefono: '8492345789',
          email: 'noely',
        },
        images: {
          path1: '',
          path2: '',
        },
        numeroOficio: '35',
        fechaOficio: '26/10/2007',
        aspectoLegal: 'af',
        jurMedica: 'ot',
        exequatur: '2721-83',
        examenFisico:
          'REFIERE EL USUARIO QUE FUE AGREDIDO FISICAMENTE POR SU PAREJA EL 25-10-07 A LAS 8PM EN LA VIA PUBLICA. RESULTANDO LESIONADO.AL EXAMEN FISICO PRESENTA: MORDEDURA HUMANA EN TERCIO SUPERIOR DE BRAZO DERECHO.',
        conclusion:
          'Estas Lesiones Curaran Dentro de un Periodo de 1 a 10 Días  ',
        referido: '9',
        estado: '1',
      },
      {
        id: 2,
        nombres: 'Juan Carlos',
        apellidos: 'De la Cruz Ramos',
        cedula: '402-2234576-5',
        fechaNacimiento: '',
        sexo: 'm',
        residencia: {
          direccion: 'Calle San Juan de la Maguana #42',
          sector: 'cristorey',
          municipio: 'Distrito Nacional',
          codigoPostal: '10501',
        },
        contatos: {
          telefono: '8492345789',
          email: 'noely',
        },
        images: {
          path1: '',
          path2: '',
        },
        numeroOficio: '35',
        fechaOficio: '30/11/2008',
        aspectoLegal: 'af',
        jurMedica: 'ot',
        exequatur: '2721-83',
        examenFisico:
          'REFIERE EL USUARIO QUE FUE AGREDIDO FISICAMENTE POR SU PAREJA EL 25-10-07 A LAS 8PM EN LA VIA PUBLICA. RESULTANDO LESIONADO.AL EXAMEN FISICO PRESENTA: MORDEDURA HUMANA EN TERCIO SUPERIOR DE BRAZO DERECHO.',
        conclusion:
          'Estas Lesiones Curaran Dentro de un Periodo de 1 a 10 Días  ',
        referido: '9',
        estado: '1',
      },
    ];

    return { AspectoLegal, List, Conclusion, JurMedica, Referido };
  }
}
