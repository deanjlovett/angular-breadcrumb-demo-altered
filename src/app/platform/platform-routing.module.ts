import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// todo: djl replaced with BLT stuff
//
// import { ChildOneComponent } from './child-one/child-one.component';
// import { ChildThreeComponent } from './child-three/child-three.component';
// import { ChildTwoComponent } from './child-two/child-two.component';
// import { ParentComponent } from './parent/parent.component';
import { PlatformComponent } from "./platform.component";

import { District01Component  } from './district01/district01.component';

import { School0101Component  } from './school0101/school0101.component';
import {  Class010101Component } from './class010101/class010101.component';
import {  Class010102Component } from './class010102/class010102.component';

import { School0102Component  } from './school0102/school0102.component';
import {  Class010201Component } from './class010201/class010201.component';
import {  Class010202Component } from './class010202/class010202.component';


const platformRoutes: Routes = [
  {
    path: "",
    component: PlatformComponent,
    children: [
      { path: "", redirectTo: "district01", pathMatch: "full" },
      {
        path: "district01",
        component: District01Component,
        data: { breadcrumb: {alias: 'district01'} },
        children: [
          {
            path: "school0101",
            component: School0101Component,
            data: { breadcrumb: {alias: 'school0101'} },
            children: [
              {
                path: "class010101",
                component: Class010101Component,
                data: {breadcrumb: {alias: 'class010101'} },
              },
              {
                path: "class010102",
                component: Class010102Component,
                data: {breadcrumb: {alias: 'class010102'} },
              },
            ],
          },
          {
            path: "school0102",
            component: School0102Component,
            data: { breadcrumb: {alias: 'school0102'} },
            children: [
              {
                path: "class010201",
                component: Class010201Component,
                data: {breadcrumb: {alias: 'class010201'} },
              },
              {
                path: "class010202",
                component: Class010202Component,
                data: {breadcrumb: {alias: 'class010202'} },
              },
            ],
          },
        ],
      },
    ],
  },

  // {
  //   path: "",
  //   component: PlatformComponent,
  //   children: [
  //     { path: "", redirectTo: "parent", pathMatch: "full" },
  //     {
  //       path: "parent",
  //       component: ParentComponent,
  //       data: { breadcrumb: {alias: 'Parent'} },
  //       children: [
  //         {
  //           path: "child-one",
  //           component: ChildOneComponent,
  //           data: { breadcrumb: {alias: 'ChildOne'} },
  //           children: [
  //             {
  //               path: "child-two",
  //               component: ChildTwoComponent,
  //               data: {breadcrumb: {alias: 'ChildTwo'} },
  //             },
  //             {
  //               path: "child-three",
  //               component: ChildThreeComponent,
  //               data: {breadcrumb: {alias: 'ChildThree'} },
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(platformRoutes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
