import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { ChildListComponent } from './child-list/child-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildFormComponent,
    ChildListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
