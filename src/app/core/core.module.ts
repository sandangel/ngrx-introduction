import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page.component';
import { LayoutComponent } from './layout.component';
import { NavItemComponent } from './nav-item.component';
import { SidenavComponent } from './sidenav.component';
import { ToolbarComponent } from './toolbar.component';
import { MaterialModule } from '../material';

export const COMPONENTS = [
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
