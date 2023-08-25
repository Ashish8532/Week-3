import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog-detail/:id', component: BlogDetailComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'edit-post/:id', component: EditPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
