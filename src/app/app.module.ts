import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RhetosModule } from '@ngx-floyd/rhetos';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RhetosModule.withConfig(environment.rhetos),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
