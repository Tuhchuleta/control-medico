import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificadoRoutingModule } from './certificado-routing.module';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CertificadoComponent } from './pages/certificado/certificado.component';
import { InitMaterialModule } from '../shared/modules';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FormatDocumentPipe } from './pipes/format-document.pipe';

@NgModule({
  declarations: [CertificadosComponent, CertificadoComponent, FormatDocumentPipe],
  imports: [
    CommonModule,
    CertificadoRoutingModule,
    HttpClientModule,
    InitMaterialModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
})
export class CertificadoModule {}
