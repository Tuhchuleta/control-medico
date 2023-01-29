import { Component } from '@angular/core';
import { InitMaterialModule } from '../../modules';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [InitMaterialModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
