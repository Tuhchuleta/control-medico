import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  constructor() {}

  createDb() {
    const AspectoLegal = [
      { id: 1, name: 'Riñas' },
      { id: 2, name: 'Asalto' },
      { id: 3, name: 'Transito' },
      { id: 4, name: 'Secuestro' },
      { id: 5, name: 'Ley 24-97' },
      { id: 6, name: 'Ley 50-88' },
      { id: 7, name: 'Agresión Física' },
      { id: 8, name: 'Agresión Sexual' },
      { id: 9, name: 'Código del Menor' },
      { id: 10, name: 'Violencia de Genero' },
      { id: 11, name: 'Violencia Sexual' },
      { id: 12, name: 'Violencia Verbal' },
      { id: 13, name: 'Problemas Pasionales' },
      { id: 14, name: 'Maltrato Infantil' },
      { id: 15, name: 'Maltrato Conyugal ' },
      { id: 16, name: 'Aborto Provocado ' },
      { id: 17, name: 'Aborto Natural' },
      { id: 18, name: 'Otros' },
    ];

    const JurMedica = [
      { id: 1, name: 'Violación' },
      { id: 2, name: 'Fractura' },
      { id: 3, name: 'Sustancia Irritante' },
      { id: 4, name: 'Arma de Fuego' },
      { id: 5, name: 'Arma Blanca' },
      { id: 6, name: 'Objeto Contundente' },
      { id: 7, name: 'Cortocontudente' },
      { id: 8, name: 'Contusa' },
      { id: 9, name: 'Cortante' },
      { id: 10, name: 'Electrocución' },
      { id: 11, name: 'Embarazo' },
      { id: 12, name: 'Enfermedades' },
      { id: 13, name: 'Transmisión Sexual' },
      { id: 14, name: 'Indeterminada' },
      { id: 15, name: 'Lesión Anal' },
      { id: 16, name: 'Punzante' },
      { id: 17, name: 'Química o Térmica' },
      { id: 18, name: 'Sin lesión o Evidencia' },
      { id: 19, name: 'Otros' },
    ];

    const Estado = [
      { id: 1, name: 'Ambulatorio' },
      { id: 2, name: 'Hospitalización' },
      { id: 3, name: 'Convalecencia en Postrado en Cama en su Domicilio' },
      { id: 4, name: 'Convalecencia en Incapacitado en su Domicilio' },
    ];

    const Referido = [
      { id: 1, name: 'de la Procuraduría General de la República Dominicana ' },
      { id: 2, name: 'de la Comandancia de la FF. AA.' },
      { id: 3, name: 'de la Comandancia de la Fuerza Aérea Dominicana' },
      { id: 4, name: 'de la Comandancia de la Marina de Guerra' },
      { id: 5, name: 'de la Comandancia de la Policía Nacional' },
      { id: 6, name: 'de la Comandancia del Ejército Nacional' },
      { id: 7, name: 'de la Comisión Investigadora' },
      { id: 8, name: 'del Departamento de Homicidios de la' },
      { id: 9, name: 'de la Corte de Apelación Penal' },
      { id: 10, name: 'de la Corte de Apelación Civil' },
      { id: 11, name: 'del Juez de Instrucción' },
      { id: 12, name: 'del Juez de Cámara Penal' },
      { id: 13, name: 'del Juez de Cámara Civil' },
      { id: 14, name: 'del Juez de Paz' },
      { id: 15, name: 'del Juez de Trabajo' },
      {
        id: 16,
        name: 'del Primera Sala Del Juzgado De Paz Especial De Transito Del D.N.',
      },
      { id: 17, name: 'del Departamento de Abusos Sexuales' },
      { id: 18, name: 'del Departamento Protección a la Mujer' },
      { id: 19, name: 'del Departamento de Familia y Menores' },
    ];

    const Conclusion = [
      {
        id: 1,
        name: 'Estas Lesiones Curaran Dentro de un Periodo de 1 a 10 Días',
      },
      {
        id: 2,
        name: 'Estas Lesiones Curaran dentro de un periodo de 10 a 21 Días',
      },
      {
        id: 3,
        name: 'Estas lesiones curaran dentro de un periodo de 21 a 30 Días',
      },
      {
        id: 4,
        name: 'Estas Lesiones curaran dentro de un periodo de 1 a 2 Meses',
      },
      {
        id: 5,
        name: 'Estas Lesiones curaran dentro de un periodo de 2 a 3 Meses',
      },
      {
        id: 6,
        name: 'Estas Lesiones curaran dentro de un periodo de 3 a 4 Meses',
      },
      {
        id: 7,
        name: 'Estas Lesiones curaran dentro de un periodo de 4 a 5 Meses',
      },
      {
        id: 8,
        name: 'Estas Lesiones curaran dentro de un periodo de 5 a 6 Meses',
      },
      {
        id: 9,
        name: 'Estas Lesiones curaran dentro de un periodo de 6 a 7 Meses',
      },
      {
        id: 10,
        name: 'Estas Lesiones curaran dentro de un periodo de 7 a 8 Meses',
      },
      {
        id: 11,
        name: 'Estas Lesiones curaran dentro de un periodo de 8 a 12 Meses',
      },
      {
        id: 12,
        name: 'Estas Lesiones curaran dentro de un periodo de 12 a 18 Meses',
      },
      {
        id: 13,
        name: 'Estas Lesiones curaran dentro de un periodo de 18 a 24 Meses',
      },
      { id: 14, name: 'Excedió el límite de 2 a 3, activarlo el mes de nuevo' },
      { id: 15, name: 'No se Aprecian Lesiones Físicas Actuales' },
      { id: 16, name: 'En Observación Médica' },
      { id: 17, name: 'Lesiones de Pronóstico Reservado' },
      { id: 18, name: 'Pendiente de Evolución y Estudios Complementarios' },
      { id: 19, name: 'El Tipo de Lesión ha producido un Daño Permanente' },
      { id: 20, name: 'Homologamos Certificado Médico en Referencia' },
      { id: 21, name: 'Lesión Permanente Desde el Punto De Vista Estético' },
    ];

    const List = [
      {
        id: 1,
        nombres: 'Noely',
        apellidos: 'Pena Ramirez',
        tipoDocumento: 'cedula',
        documentoIdentidad: '00117524694',
        fechaNacimiento: '',
        sexo: 'M',
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
        fechaOficio: new Date('2007-12-17T03:24:00'),
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
        tipoDocumento: 'cedula',
        documentoIdentidad: '40222345765',
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
        fechaOficio: new Date('2008-11-12T03:24:00'),
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

    return { AspectoLegal, List, Conclusion, JurMedica, Referido, Estado };
  }
}
