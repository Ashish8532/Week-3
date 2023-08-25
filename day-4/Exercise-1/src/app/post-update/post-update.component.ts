import { Component, OnInit } from '@angular/core';
import { PostModel } from '../Models/post-model';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../Service/post.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  postId: number = 0;
  editedPost: PostModel = { id: 0, userId: 0, title: '', body: '' };

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postId = this.route.snapshot.params['id'];
      console.log(this.postId);
      this.editedPost = this.postService.getLocalPostById(this.postId);
      console.log(this.editedPost);
      if (!this.editedPost) {
        this.router.navigate(['/newpost']);
      }
    });
  }

  updatePost(): void {
    this.postService.updatePost(this.editedPost);
    this.router.navigate(['/']);
  }
}

