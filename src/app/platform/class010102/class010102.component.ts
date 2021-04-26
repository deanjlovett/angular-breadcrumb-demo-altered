import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-class010102',
  templateUrl: './class010102.component.html',
  styleUrls: ['./class010102.component.sass']
})
export class Class010102Component implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@Class010102', 'Class 010102');
  }

}
