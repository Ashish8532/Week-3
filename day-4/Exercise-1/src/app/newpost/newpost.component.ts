import { Component, OnInit } from '@angular/core';
import { PostModel } from '../Models/post-model';
import { PostService } from '../Service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  posts: PostModel[] = [];

  newPosts: PostModel[] = [];

  constructor(private postService: PostService, private route: Router) {}

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost(): void {  
    this.newPosts = this.postService.getPosts(); 
  }

  deleteLocalPost(postId: number): void {
    this.postService.deletePost(postId);
    this.loadPost();
  }
}


