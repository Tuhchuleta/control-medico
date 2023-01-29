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
      content: [
        {
          columns: [
            {
              width: '15%',
              stack: [
                {
                  margin: [5, 0, 5, 0],
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
              margin: [5, 0, 5, 0],
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
          text: 'Certificado No.:',
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
                  text: `Yo, ${
                    user.nombre
                  } juramentado como Médico Legista, con exequatur número: ${
                    user.exequatur
                  }, CERTIFICO que, actuando a requerimiento ${
                    form.referido
                  }, he practicado un exámen físico a ${form.nombres.toUpperCase()} ${form.apellidos.toUpperCase()}, cédula: ${
                    form.cedula ? form.cedula : 'N/P'
                  }, domiciliado en ${form.residencia.direccion} ${
                    form.residencia.sector
                  }, Edad 21 que actualmente se encuentra en estado ${
                    form.estado
                  }, Constatando mediante el interrogatorio, como por el exámen fisico que presenta:`,
                  fontSize: 14,
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
                      text: `${form.examenFisico}`,
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
                  text: [
                    {
                      decoration: 'underline',
                      bold: true,
                      text: `Conclusion: ${form.conclusion}`,
                    },
                    {
                      text: '(Las conclusiones estan sujetas a cualquier tipo de complicacion que se presente dentro de la evolucion del periodo de curacion establecido).',
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
          text: [
            {
              text: 'EXPEDIDO en la cuidad de Santo Domingo de Guzman, Distrito Nacional, capital de la Republica Dominicana de fecha ',
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
          margin: [0, 30, 0, 0],
          alignment: 'center',
          text: '________________________________',
        },
        {
          margin: [0, 5, 0, 0],
          bold: true,
          alignment: 'center',
          text: 'Medico Legista Actuante',
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
