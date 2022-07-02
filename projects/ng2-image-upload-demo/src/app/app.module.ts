import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadModule } from 'ng2-op-image-upload';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/components/demo.component';
import { DemoModule } from './demo/demo.module';
import { ReadmeComponent } from './readme/components/readme.component';
import { ReadmeModule } from './readme/readme.module';

const routes: Routes = [{
  path: '',
  redirectTo: 'demo',
  pathMatch: 'prefix'
}, {
  path: 'demo',
  component: DemoComponent
}, {
  path: 'readme',
  component: ReadmeComponent
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    DemoModule,
    ReadmeModule,
    ImageUploadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
