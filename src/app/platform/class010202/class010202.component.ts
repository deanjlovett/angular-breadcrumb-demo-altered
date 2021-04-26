import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-class010202',
  templateUrl: './class010202.component.html',
  styleUrls: ['./class010202.component.sass']
})
export class Class010202Component implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@Class010202', 'Class 010202');
  }

}
