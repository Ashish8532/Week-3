import { Component, OnInit } from '@angular/core';
import { BlogService } from '../Service/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../Models/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  postId: number = 0;
  post: any = {};
  comments: any[] = [];

  constructor(private postService: BlogService, private route: ActivatedRoute) {}
   
  ngOnInit(): void {
    this.viewBlogDetails();
  }

  viewBlogDetails(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];

      this.postService.getPostById(this.postId)
        .subscribe(post => {
          this.post = post;
          console.log("Post Displayed with correponding comments.");
          this.postService.getCommentsForPost(this.postId)
            .subscribe(comments => {
              this.comments = comments;
              console.log("Comments Loaded for the blog.");
            });
        });
    });
  }
}
