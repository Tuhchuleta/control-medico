import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificadoRoutingModule } from './certificado-routing.module';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CertificadoComponent } from './pages/certificado/certificado.component';
import { InitMaterialModule } from '../shared/modules';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CertificadosComponent, CertificadoComponent],
  imports: [
    CommonModule,
    CertificadoRoutingModule,
    HttpClientModule,
    InitMaterialModule,
  ],
})
export class CertificadoModule {}
