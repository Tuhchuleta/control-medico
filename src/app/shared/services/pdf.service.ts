import { Injectable } from '@angular/core';

import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as pdfMake from 'pdfmake/build/pdfmake';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  logoMisterioPublicoUrl!: string;
  logoInacifUrl!: string;
  logoInacifWatermarkUrl!: string;

  constructor() {
    this.getImageDataUrlFromLocalPath(
      'assets/images/ministerio-publico.jpg'
    ).then((result) => (this.logoMisterioPublicoUrl = result));
    this.getImageDataUrlFromLocalPath('assets/images/inacif.png').then(
      (result) => (this.logoInacifUrl = result)
    );
    this.getImageDataUrlFromLocalPath('assets/images/inacifwatermark.jpg').then(
      (result) => (this.logoInacifWatermarkUrl = result)
    );
  }
  private edad(fechaOficio: Date, fechaNacimiento: Date): string {
    const edad = fechaOficio.getFullYear() - fechaNacimiento.getFullYear();
    const monthDiff = fechaOficio.getMonth() - fechaNacimiento.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && fechaOficio.getDate() < fechaNacimiento.getDate())
    ) {
      return this.mayorEdad(edad - 1);
    }
    return this.mayorEdad(edad);
  }

  private mayorEdad(edad: number): string {
    return edad >= 18 ? 'mayor de edad' : 'menor de edad';
  }

  private background() {
    const fn = (currentPage: any, pageSize: any) => {
      return {
        image: this.logoInacifWatermarkUrl,
        opacity: 0.3,
        width: 502,
        height: 380,
        alignment: 'center',
        absolutePosition: { y: 180 },
      };
    };
    return fn;
  }

  createPdf(form: any): void {
    const user: any = JSON.parse(localStorage.getItem('user'));

    const certificadoPdf: any = {
      background: this.background(),

      footer: [
        {
          margin: [40, -40, 0, 0],
          alignment: 'left',
          text: [
            {
              alignment: 'left',
              fontSize: 10,
              text: 'Calle Fabio Fiallo esq. Beller, Palacio de Justicia de Ciudad Nueva, \n Santo Domingo, Distrito Nacional \n Teléfono: 809-533-3522 \n www.fiscaliadeldistrito.gob.do',
            },
          ],
        },
        {
          margin: [0, 20, 0, 0],
          alignment: 'center',
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 0,
              x2: 595,
              y2: 0,
              lineColor: '#2F5597',
              lineWidth: 35,
            },
          ],
        },
      ],
      content: [
        {
          columns: [
            {
              width: '15%',
              stack: [
                {
                  margin: [0, 0, 5, 0],
                  width: 90,
                  height: 100,
                  image: this.logoMisterioPublicoUrl,
                },
              ],
            },
            {
              alignment: 'center',
              width: '55%',
              text: 'CERTIFICADO MEDICO LEGAL',
              style: 'header',
              fontSize: 18,
              bold: true,
            },
            {
              margin: [5, 0, 0, 0],
              width: '20%',
              stack: [
                {
                  width: 150,
                  height: 80,
                  image: this.logoInacifUrl,
                },
              ],
            },
          ],
        },
        {
          margin: [5, 5, 10, 0],
          bold: true,
          text: `Certificado No.: ${form.id}`,
        },
        {
          margin: [0, 5, 0, 0],
          table: {
            widths: ['100%'],
            body: [
              [
                {
                  margin: [10, 10],
                  alignment: 'justify',
                  fontSize: 12,
                  text: [
                    {
                      text: 'Yo',
                    },
                    {
                      bold: true,
                      text: `${user.nombre.toUpperCase()}`,
                    },
                    {
                      text: 'juramentado como Médico Legista, con Exequátur No. ',
                    },
                    {
                      bold: true,
                      text: `${user.exequatur}`,
                    },
                    {
                      bold: true,
                      text: ' CERTIFICO ',
                    },
                    {
                      text: 'que, actuando a requerimiento ',
                    },
                    {
                      bold: true,
                      text: `${form.referido}`,
                    },
                    {
                      text: ' he practicado un examen físico ',
                    },
                    {
                      text: `${form.sexo === 'M' ? 'al Sr. ' : 'a la Sra. '}`,
                    },
                    {
                      text: `${form.nombres.toUpperCase()} ${form.apellidos.toUpperCase()}`,
                    },
                    {
                      text: ` ${form.nacionalidad} ${this.edad(
                        form.fechaOficio,
                        form.fechaNacimiento
                      )}`,
                    },
                    {
                      text: ' portador (a) del documento de identidad No. ',
                    },
                    {
                      bold: true,
                      text: `${this.formatDocument(form.documentoIdentidad)}`,
                    },
                    {
                      text: ' domiciliado y residente en la ',
                    },
                    {
                      bold: true,
                      text: `${form.residencia.direccion} ${form.residencia.sector} ${form.residencia.provincia}`,
                    },
                    {
                      text: ' que actualmente se encuentra en estado ',
                    },
                    {
                      bold: true,
                      text: `${form.estado}`,
                    },
                    {
                      bold: true,
                      text: ' Constatando mediante el interrogatorio, como por el examen físico que presenta:',
                    },
                  ],
                },
              ],
            ],
          },
          layout: {
            hLineColor: function (i: any, node: any) {
              return '#000';
            },
            vLineColor: function (i: any, node: any) {
              return '#000';
            },
          },
        },
        {
          margin: [0, 10, 0, 0],
          table: {
            body: [
              [
                [
                  {
                    margin: [10, 10],
                    width: 100,
                    height: 100,
                    image:
                      form?.images?.agresion?.path ||
                      this.logoMisterioPublicoUrl,
                  },
                  {
                    margin: [10, 10],
                    width: 100,
                    height: 100,
                    image:
                      form?.images?.perfil?.path || this.logoMisterioPublicoUrl,
                  },
                ],

                {
                  columns: [
                    {
                      margin: [10, 10, 10, 0],
                      width: 376,
                      alignment: 'justify',
                      fontSize: 12,
                      text: `${form.examenFisico.toUpperCase()}`,
                    },
                  ],
                },
              ],
            ],
          },
          layout: {
            hLineColor: function (i: any, node: any) {
              return '#000';
            },
            vLineColor: function (i: any, node: any) {
              return '#000';
            },
          },
        },
        {
          margin: [0, 10, 0, 0],
          table: {
            widths: ['100%'],
            body: [
              [
                {
                  margin: [10, 10],
                  alignment: 'justify',
                  fontSize: 12,
                  text: [
                    {
                      decoration: 'underline',
                      bold: true,
                      text: `Conclusiones: ${form.conclusion}\n`,
                    },
                    {
                      text: '(Las conclusiones están sujetas a cualquier tipo de complicación que se presente dentro de la evolución del periodo de curación establecido).',
                    },
                  ],
                },
              ],
            ],
          },
          layout: {
            hLineColor: function (i: any, node: any) {
              return '#000';
            },
            vLineColor: function (i: any, node: any) {
              return '#000';
            },
          },
        },
        {
          margin: [5, 10, 10, 20],
          alignment: 'justify',
          fontSize: 12,
          text: [
            {
              text: 'EXPEDIDO en la cuidad de Santo Domingo de Guzmán, Distrito Nacional, capital de la República Dominicana de fecha ',
            },
            {
              bold: true,
              text: `${this.dateToText(form?.fechaOficio as Date)}`,
            },
            {
              text: `${this.timeToText(form?.fechaOficio as Date)}`,
            },
          ],
        },
        {
          margin: [0, 25, 0, 0],
          alignment: 'center',
          fontSize: 12,
          text: '________________________________ \n Médico Legista Actuante',
        },
      ],
      defaultStyle: {
        font: 'gillSansMT',
      },
    };

    const fonts = {
      gillSansMT: {
        normal: 'Gill-Sans-MT.ttf',
        bold: 'Gill-Sans-MT.ttf',
        italics: 'Gill-Sans-MT.ttf',
        bolditalics: 'Gill-Sans-MT.ttf',
      },
    };

    pdfMake.createPdf(certificadoPdf, null, fonts).open();
  }

  private formatDocument(document: string): string {
    if (!document) {
      return 'N/P';
    }

    return document.length === 11
      ? (document = document.replace(/(\d{3})(\d{7})(\d{1})/, '$1-$2-$3'))
      : document.toUpperCase();
  }

  private dateToText(fechaOficio: Date): string {
    const date = moment(fechaOficio).locale('es');
    const dayText = date.format('dddd');
    const day = date.format('DD');
    const month = date.format('MMMM');
    const year = date.format('yyyy');

    return `${dayText} ${day} del mes de ${month} del año ${year} `;
  }

  private timeToText(fechaOficio: Date): string {
    const date = moment(fechaOficio).locale('es');
    const hour = date.format('hh');
    const minutes = date.format('mm');
    const seconds = date.format('ss');
    const ampm = date.format('a');

    return `a las ${hour}:${minutes}:${seconds} ${ampm} horas.`;
  }

  private getImageDataUrlFromLocalPath(localPath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      let canvas = document.createElement('canvas');
      let img = new Image();
      img.onload = () => {
        canvas.height = img.height;
        canvas.width = img.width;
        canvas.getContext('2d').drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = () => reject('Imagen no disponible');
      img.src = localPath;
    });
  }
}
