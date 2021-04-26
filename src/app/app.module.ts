import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { BreadcrumbService } from 'xng-breadcrumb';

// todo: djl: imported elsewhere
//
// import { DistrictComponent } from './district/district.component';
// import { SchoolComponent } from './school/school.component';
// import { ClassComponent } from './class/class.component';
// import { District01Component } from './platform/district01/district01.component';
// import { District02Component } from './district02/district02.component';
// import { School0101Component } from './platform/school0101/school0101.component';
// import { School0102Component } from './school0102/school0102.component';
// import { School0201Component } from './school0201/school0201.component';
// import { School0202Component } from './school0202/school0202.component';
// import { Class010101Component } from './platform/class010101/class010101.component';
// import { Class010102Component } from './class010102/class010102.component';
// import { Class010201Component } from './class010201/class010201.component';
// import { Class010202Component } from './class010202/class010202.component';
// import { Class020101Component } from './class020101/class020101.component';
// import { Class020102Component } from './class020102/class020102.component';
// import { Class020201Component } from './class020201/class020201.component';
// import { Class020202Component } from './class020202/class020202.component';

@NgModule({
  declarations: [
    AppComponent,
    // todo: djl: declared elsewhere
    // DistrictComponent,
    // SchoolComponent,
    // ClassComponent,
    // District01Component,
    // District02Component,
    // School0101Component,
    // School0102Component,
    // School0201Component,
    // School0202Component,
    // Class010101Component,
    // Class010102Component,
    // Class010201Component,
    // Class010202Component,
    // Class020101Component,
    // Class020102Component,
    // Class020201Component,
    // Class020202Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
  ],
  providers: [
    BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
