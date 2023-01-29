import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CertificadoService } from '../../services/certificado.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss'],
})
export class CertificadosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = [
    'id',
    'nombre',
    'apellido',
    'cedula',
    'fechaOficio',
    'tools',
  ];

  constructor(
    private router: Router,
    private certificadoService: CertificadoService
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  print(): void {
    console.log('print');
  }

  goToCertificado(id?: string): void {
    id
      ? this.router.navigate(['/private/certificado/edit', id])
      : this.router.navigate(['/private/certificado/create']);
  }

  private getList(): void {
    const result = this.certificadoService.getCertificados();
    console.log(result);
    this.dataSource = new MatTableDataSource(result);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
