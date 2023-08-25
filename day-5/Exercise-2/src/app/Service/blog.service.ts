import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private postUrl = 'https://jsonplaceholder.typicode.com/posts';
  private commentUrl = 'https://jsonplaceholder.typicode.com/posts/${post.id}/comments';
  blogPosts: any[] = [];

  constructor(private httpClient: HttpClient) { }

  fetchPost(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(this.postUrl);
  }

  getPostDetails(postId: number) {
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  getCommentsForPost(postId: number) {
    return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
