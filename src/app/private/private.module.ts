import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './layout/private/private.component';
import { InitMaterialModule } from '../shared/modules';

@NgModule({
  declarations: [PrivateComponent],
  imports: [CommonModule, PrivateRoutingModule, InitMaterialModule],
})
export class PrivateModule {}
