import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './Posts/create-post/create-post.component';
import { PostComponent } from './Posts/post/post.component';
import { ListitemofpostComponent } from './Posts/listitemofpost/listitemofpost.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    PostComponent,
    ListitemofpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports:[CreatePostComponent,PostComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
