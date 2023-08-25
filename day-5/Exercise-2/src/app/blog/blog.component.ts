import { Component, OnInit } from '@angular/core';
import { BlogService } from '../Service/blog.service';
import { Router } from '@angular/router';
import { Blog } from '../Models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Blog[] = [];

  constructor(private postService: BlogService, private route: Router) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.postService.getPost().subscribe((data: Blog[])=>{
      this.posts = data;
    }); 
  }
}
