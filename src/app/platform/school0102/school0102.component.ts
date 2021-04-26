import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-school0102',
  templateUrl: './school0102.component.html',
  styleUrls: ['./school0102.component.sass']
})
export class School0102Component implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@School0102', 'School0102');
  }

  checkRouteUrl() {
    return this.router.url == '/platform/district01/school0102';
  }

}
