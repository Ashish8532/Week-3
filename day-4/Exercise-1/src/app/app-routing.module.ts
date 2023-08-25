import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostDisplayComponent } from './post-display/post-display.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { NewpostComponent } from './newpost/newpost.component';
import { PostUpdateComponent } from './post-update/post-update.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'post', component: PostDisplayComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'newpost', component: NewpostComponent },
  { path: 'update/:id', component: PostUpdateComponent },
  { path: 'newpost/:id', component: NewpostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
