import { Component, OnInit } from '@angular/core';
import { BlogService } from '../Service/blog.service';
import { Router } from '@angular/router';
import { Blog } from '../Models/blog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  newPost = { title: '', body: '' };

  createdPost: Blog[] = [];

  constructor(private httpClient: HttpClient,private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {}

  createPost(): void {
    this.httpClient.post<any>('https://jsonplaceholder.typicode.com/posts', this.newPost).subscribe(
      (createdPost) => {
        // Append the newly created post to the fetched posts array
        this.blogService.appendFetchedPost(createdPost);

        // Redirect to the Blog page after creating the post
        this.router.navigate(['/blog']);
      },
      (error) => {
        console.error('Error creating post:', error);
      }
    );
  }
}
