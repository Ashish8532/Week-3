import { Component, OnInit } from '@angular/core';
import { BlogService } from '../Service/blog.service';
import { Router } from '@angular/router';
import { Blog } from '../Models/blog';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  newPost = { title: '', body: '' };

  constructor(private postService: BlogService, private router: Router) {}

  ngOnInit(): void {}

  createPost(): void {
    if (this.newPost.title.trim() && this.newPost.body.trim()) {
      this.postService.createPost(this.newPost).subscribe;
      console.log(this.newPost);
      this.router.navigate(['blog']);
    }
  }
}
