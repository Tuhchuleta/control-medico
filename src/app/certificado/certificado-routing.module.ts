import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CertificadoComponent } from './pages/certificado/certificado.component';

const routes: Routes = [
  {
    path: '',
    component: CertificadosComponent,
  },
  {
    path: 'create',
    component: CertificadoComponent,
  },
  {
    path: 'edit/:id',
    component: CertificadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificadoRoutingModule {}
