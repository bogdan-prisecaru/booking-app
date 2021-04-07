import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: null,
  },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
})

export class AppRoutingModule { }
