import { Component } from '@angular/core';

interface BlogPost {
  title: string;
  content: string;
  publishedDate: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    { title: 'First Blog Post', content: 'This is the content of the first post.', publishedDate: "2023-08-25" },
    { title: 'Second Blog Post', content: 'This is the content of the second post.', publishedDate: "2023-08-25"},
    // Add more blog posts here
  ];
}
