import { Component, OnInit } from '@angular/core';
import { PostService } from '../Service/post.service';
import { PostModel } from '../Models/post-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  newPost: PostModel = {
    userId: 101, // Set the user ID as needed
    id: 0, // It will be updated after creation
    title: '',
    body: ''
  };

  post: PostModel[] =[];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {}

  createPost(): void {
    if (this.newPost.title.trim() && this.newPost.body.trim()) {
      this.postService.createPost(this.newPost);
      this.router.navigate(['newpost']);
    }
  }
}
