import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/post';
import { PostService } from '../Service/post.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]>;
  posts: Post[] = [];

  newPosts: Post[] = [];

  constructor(private postService: PostService, private route: Router) {
    this.posts$ = of([]);
  }

  ngOnInit(): void {
    this.getPost();
  }

  async getPost(): Promise<void>{
    this.postService.fetchPost().subscribe(posts => {
      this.posts$ = of(posts);
      this.posts = posts;
    });
  }
}

