import { Component, OnInit } from '@angular/core';
import { CertificadoService } from '../../services/certificado.service';
import { FormValidator, Provincias } from '../../../shared/constants';
import { PdfService } from '../../../shared/services/pdf.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss'],
})
export class CertificadoComponent implements OnInit {
  certificadoFormGroup: UntypedFormGroup;

  aspectoLegal$ = this.certificadoService.getAspectoLegal();
  conclusion$ = this.certificadoService.getConclusion();
  jurMedica$ = this.certificadoService.getJurMedica();
  referido$ = this.certificadoService.getReferido();

  provincias = Provincias;

  image1Selected: string | ArrayBuffer = '';
  image2Selected: string | ArrayBuffer = '';

  constructor(
    private certificadoService: CertificadoService,
    private formBuilder: UntypedFormBuilder,
    private pdfService: PdfService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  create(): void {
    // if (this.certificadoFormGroup.invalid) {
    //   return Object.values(this.certificadoFormGroup.controls).forEach(
    //     (control) => {
    //       control.markAllAsTouched();
    //     }
    //   );
    // }
    console.log(this.certificadoFormGroup);

    this.pdfService.createPdf(this.certificadoFormGroup.getRawValue());
  }

  onimage1Selected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.images.patchValue({
        path1: event.target.files[0] as File,
      });
      const reader = new FileReader();
      reader.onload = (e) => (this.image1Selected = reader.result || '');
      reader.readAsDataURL(this.images.value.path1);
    }
  }

  onimage2Selected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.images.patchValue({
        path2: event.target.files[0] as File,
      });
      const reader = new FileReader();
      reader.onload = (e) => (this.image2Selected = reader.result || '');
      reader.readAsDataURL(this.images.value.path2);
    }
  }

  private createForm(): void {
    this.certificadoFormGroup = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      cedula: [''],
      fechaNacimiento: ['', Validators.required],
      sexo: ['M', Validators.required],
      residencia: this.formBuilder.group({
        direccion: ['', Validators.required],
        sector: ['', Validators.required],
        provincia: ['', Validators.required],
        codigoPostal: ['', Validators.required],
      }),
      contactos: this.formBuilder.group({
        telefono: ['', Validators.required],
        email: [''],
      }),
      images: this.formBuilder.group({
        path1: [''],
        path2: [''],
      }),
      aspectoLegal: ['', Validators.required],
      jurMedica: ['', Validators.required],
      examenFisico: ['', Validators.required],
      conclusion: ['', Validators.required],
      referido: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  get errorMessages() {
    return FormValidator;
  }

  get nombres() {
    return this.certificadoFormGroup.get('nombres');
  }

  get apellidos() {
    return this.certificadoFormGroup.get('apellidos');
  }

  get cedula() {
    return this.certificadoFormGroup.get('cedula');
  }

  get fechaNacimiento() {
    return this.certificadoFormGroup.get('fechaNacimiento');
  }

  get residencia() {
    return this.certificadoFormGroup.get('residencia');
  }

  get contactos() {
    return this.certificadoFormGroup.get('contactos');
  }

  get images() {
    return this.certificadoFormGroup.get('images');
  }

  get aspectoLegal() {
    return this.certificadoFormGroup.get('aspectoLegal');
  }

  get jurMedica() {
    return this.certificadoFormGroup.get('jurMedica');
  }

  get exequatur() {
    return this.certificadoFormGroup.get('exequatur');
  }

  get examenFisico() {
    return this.certificadoFormGroup.get('examenFisico');
  }

  get conclusion() {
    return this.certificadoFormGroup.get('conclusion');
  }

  get referido() {
    return this.certificadoFormGroup.get('referido');
  }

  get estado() {
    return this.certificadoFormGroup.get('estado');
  }
}
