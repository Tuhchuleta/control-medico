import { Injectable } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { from, map } from 'rxjs';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  logoDataUrl!: string;

  constructor() {
    this.getImageDataUrlFromLocalPath1('assets/images/mp.jpg').then(
      (result) => (this.logoDataUrl = result)
    );
  }

  createPdf(form: any): void {
    const user: any = JSON.parse(localStorage.getItem('user'));

    const certificadoPdf: any = {
      content: [
        {
          alignment: 'center',
          margin: [0, 10],
          columns: [
            {
              width: '25%',
              stack: [
                {
                  width: 100,
                  height: 100,
                  image: this.logoDataUrl,
                },
              ],
            },
            {
              width: '50%',
              text: 'CERTIFICADO MEDICO LEGAL',
              style: 'header',
              fontSize: 18,
              bold: true,
            },
            {
              width: '25%',
              alignment: 'center',
              text: [
                {
                  bold: true,
                  text: 'INACIF ',
                  fontSize: 30,
                },
                {
                  width: '100%',
                  text: 'INSTITUTO NACIONAL DE CIENCIAS FORENSES ',
                  fontSize: 10,
                },
                {
                  text: 'PROCURADORIA GENERAL DE LA REPUBLICA',
                  fontSize: 6,
                },
              ],
            },
          ],
        },

        {
          margin: [0, 40, 0, 0],
          table: {
            widths: ['100%'],
            body: [
              [
                {
                  margin: [10, 10],
                  text: `Yo, ${
                    user.nombre
                  } juramentado como Médico Legista, con exequatur número: ${
                    user.exequatur
                  }, CERTIFICO que, actuando a requerimiento ${
                    form.referido
                  } , he practicado un exámen físico a ${form.nombres.toUpperCase()} ${form.apellidos.toUpperCase()} , cédula ${
                    form.cedula
                  } domiciliado en ${
                    form.sector
                  }, Edad 21 que actualmente se encuentra en estado ${
                    form.estado
                  } Constatando mediante el interrogatorio, como por el exámen fisico que presenta:`,
                  fontSize: 14,
                },
              ],
            ],
          },
        },

        {
          margin: [0, 20, 0, 0],
          table: {
            body: [
              [
                [
                  {
                    margin: [10, 10],
                    width: 100,
                    height: 100,
                    image: this.logoDataUrl,
                  },
                  {
                    margin: [10, 10],
                    width: 100,
                    height: 100,
                    image: this.logoDataUrl,
                  },
                ],
                {
                  margin: [10, 10],
                  text: 'RERIERE LA USUARIA QUE ESTAEMBARAZADA Y QUE RUE AGREDIDA FISICAMENTE POR UN CONOCIDO BL31-01-2019 A LAS 2:30PM BNLA VIN PUBLICA. RESULTANDO LESIONADA. REFIERE HABER SUFRIDO CAIDA DE MOTOCICLETA POR INIENTO DE AGRESION.TRAE SONOGRARIA OBSTEIRICA DE CENTRO SONOGRARIA FIGUEROA GERMOSEN DE RECHA: 31-01-2019 R BALIZADA POR EL DOCTOR MARCOS RIGUBROA GERMOSEN MEDICO SONOGRAFISIA QUE REZA UTBRO GRAVIDO CON SACO GESTACIONAL EN SUINTBRIOR DE BORDES Y CONTORNOS REGULARES SI CO MADESMMANEXOS NORIALES DIAGNOSTICO- BMBARAZO DE 4 SEMANAS DE GESTACION. HASTA AQUIXX AL EXAMEN FISICO PRESENTA SIMEVIDENCIA RISICA ACTUAL.',
                },
              ],
            ],
          },
        },
      ],

      images: {
        mySuperImage: 'data:image/jpeg;base64,...content...',
      },
    };

    pdfMake.createPdf(certificadoPdf).open();
  }

  private getImageDataUrlFromLocalPath1(localPath: string): Promise<string> {
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
