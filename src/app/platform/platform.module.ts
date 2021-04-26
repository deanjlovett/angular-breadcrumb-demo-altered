import { RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlatformComponent} from './platform.component';
import {PlatformRoutingModule} from './platform-routing.module';

// todo: djl: replaced with BLT stuff
//
// import { ParentComponent } from './parent/parent.component';
// import { ChildOneComponent } from './child-one/child-one.component';
// import { ChildTwoComponent } from './child-two/child-two.component';
// import { ChildThreeComponent } from './child-three/child-three.component';

import { District01Component  } from './district01/district01.component'

import { School0101Component  } from './school0101/school0101.component'
import { Class010101Component } from './class010101/class010101.component'
import { Class010102Component } from './class010102/class010102.component'

import { School0102Component  } from './school0102/school0102.component'
import { Class010201Component } from './class010201/class010201.component'
import { Class010202Component } from './class010202/class010202.component'


import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbModule } from "xng-breadcrumb";


@NgModule({
  declarations: [
    PlatformComponent,
    District01Component,
      School0101Component,
        Class010101Component,
        Class010102Component,
      School0102Component,
        Class010201Component,
        Class010202Component,
  ],
  // declarations: [
  //   PlatformComponent,
  //   ParentComponent,
  //   ChildOneComponent,
  //   ChildTwoComponent,
  //   ChildThreeComponent,
  // ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    BreadcrumbModule,
    RouterModule,
    MatIconModule,
  ]
})
export class PlatformModule {
}
