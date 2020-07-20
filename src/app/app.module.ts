import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebWorkerDemoComponent } from './Components/web-worker-demo/web-worker-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    WebWorkerDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
