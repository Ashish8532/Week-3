import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDisplayComponent } from './post-display/post-display.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { NewpostComponent } from './newpost/newpost.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostDisplayComponent,
    PostCreateComponent,
    NewpostComponent,
    PostUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
