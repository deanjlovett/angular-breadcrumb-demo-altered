import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-class010101',
  templateUrl: './class010101.component.html',
  styleUrls: ['./class010101.component.sass']
})
export class Class010101Component implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@Class010101', 'Class 010101');
  }
}
