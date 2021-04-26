import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-district01',
  templateUrl: './district01.component.html',
  styleUrls: ['./district01.component.sass']
})
export class District01Component implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@District01', 'District01');
  }

  checkRouteUrl() {
    return this.router.url == '/platform/district01';
  }

}
