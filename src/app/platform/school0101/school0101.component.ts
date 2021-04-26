import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-school0101',
  templateUrl: './school0101.component.html',
  styleUrls: ['./school0101.component.sass']
})
export class School0101Component implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@School0101', 'School0101');
  }

  checkRouteUrl() {
    return this.router.url == '/platform/district01/school0101';
  }

}
