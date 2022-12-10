import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './Posts/post/post.component';
import { CreatePostComponent } from './Posts/create-post/create-post.component';
import { createComponent } from '@angular/compiler/src/core';
const routes: Routes = [{path:"post",component:PostComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
