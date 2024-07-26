import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    AdminHeaderComponent,
    AdminLayoutComponent,
    AdminFooterComponent,
  ],
  exports: [
    AdminLayoutComponent,
  ]
})
export class AdminUiModule { }
