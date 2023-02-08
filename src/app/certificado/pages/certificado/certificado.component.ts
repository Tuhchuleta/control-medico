import { Component, OnInit } from '@angular/core';
import { CertificadoService } from '../../services/certificado.service';
import { FormValidator, Provincias } from '../../../shared/constants';
import { PdfService } from '../../../shared/services/pdf.service';
import { Router } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { JsonpInterceptor } from '@angular/common/http';

JsonpInterceptor;

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
  estado$ = this.certificadoService.getEstado();

  provincias = Provincias;

  constructor(
    private certificadoService: CertificadoService,
    private formBuilder: UntypedFormBuilder,
    private pdfService: PdfService,
    private router: Router
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

    const certificados = localStorage.getItem('certificados');
    this.id.setValue(certificados ? JSON.parse(certificados).length + 1 : 1);
    this.certificadoService.createCertificado(this.certificadoFormGroup.value);

    Swal.fire({
      title: '¿Desea imprimir el certificado?',
      showDenyButton: true,
      denyButtonText: 'No Imprimir',
      confirmButtonText: 'Imprimir',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.pdfService.createPdf(this.certificadoFormGroup.getRawValue());
      }
      this.cancel();
    });
  }

  cancel(): void {
    this.router.navigate(['private/certificado']);
  }

  onImageAgrecionSelected(event: any): void {
    const file = event.target.files[0] as File;

    const reader = new FileReader();
    reader.onload = (e) => {
      this.images.get('agresion').setValue({
        path: reader.result,
        file: file,
      });
    };
    reader.readAsDataURL(file);
  }

  onImagePerfilSelected(event: any): void {
    const file = event.target.files[0] as File;

    const reader = new FileReader();
    reader.onload = (e) => {
      this.images.get('perfil').setValue({
        path: reader.result,
        file: file,
      });
    };
    reader.readAsDataURL(file);
  }

  private createForm(): void {
    this.certificadoFormGroup = this.formBuilder.group({
      id: [''],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      tipoDocumento: ['cedula'],
      documentoIdentidad: [''],
      nacionalidad: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      sexo: ['M', Validators.required],
      residencia: this.formBuilder.group({
        direccion: ['', Validators.required],
        sector: ['', Validators.required],
        provincia: [this.provincias[0], Validators.required],
        municipio: ['', Validators.required],
        codigoPostal: [''],
      }),
      contactos: this.formBuilder.group({
        telefono: [''],
        email: [''],
      }),
      images: this.formBuilder.group({
        agresion: this.formBuilder.group({
          path: [],
          file: ['', Validators.required],
        }),
        perfil: this.formBuilder.group({
          path: [],
          file: ['', Validators.required],
        }),
      }),
      aspectoLegal: ['', Validators.required],
      fechaOficio: [new Date(Date.now())],
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

  get id() {
    return this.certificadoFormGroup.get('id');
  }

  get nombres() {
    return this.certificadoFormGroup.get('nombres');
  }

  get apellidos() {
    return this.certificadoFormGroup.get('apellidos');
  }

  get documentoIdentidad() {
    return this.certificadoFormGroup.get('cedula');
  }

  get nacionalidad() {
    return this.certificadoFormGroup.get('nacionalid');
  }

  get fechaNacimiento() {
    return this.certificadoFormGroup.get('fechaNacimiento');
  }

  get residencia() {
    return this.certificadoFormGroup.get('residencia');
  }

  get provincia() {
    return this.residencia.get('provincia');
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

  get fechaOficio() {
    return this.certificadoFormGroup.get('fechaOficio');
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

  get tipoDocumento() {
    return this.certificadoFormGroup.get('tipoDocumento');
  }
}
