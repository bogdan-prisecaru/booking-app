import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
})

export class AppCoreModule { }
