import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './layout/private/private.component';

import { ToolbarComponent } from '../shared/components';

@NgModule({
  declarations: [PrivateComponent],
  imports: [CommonModule, PrivateRoutingModule, ToolbarComponent],
})
export class PrivateModule {}
