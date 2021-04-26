import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-class010201',
  templateUrl: './class010201.component.html',
  styleUrls: ['./class010201.component.sass']
})
export class Class010201Component implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@Class010201', 'Class 010201');
  }

}
