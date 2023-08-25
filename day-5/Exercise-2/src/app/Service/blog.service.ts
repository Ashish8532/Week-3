import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private postUrl = 'https://jsonplaceholder.typicode.com/posts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  blogPosts: any[] = [];

  newPosts: Blog[] = []; // Array to store local posts
  

  constructor(private httpClient: HttpClient) { }

  fetchPost(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(this.postUrl);
  }

  createPost(post : any): Observable<Blog> {
    console.log(post);
    return this.httpClient.post<any>(this.postUrl, post);
  }  

  getPostDetails(postId: number) {
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  getCommentsForPost(postId: number) {
    return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }

  // createPost(postData: any): Observable<any> {
  //   postData.id = this.nextId++;
  //   postData.userId = this.nextUserId++;
  //   console.log("Post Data: "+postData);
  //   return this.httpClient.post(this.postUrl, postData);
  // }

  updatePost(postId: number, postData: any) {
    const url = `${this.postUrl}/${postId}`;
    return this.httpClient.put(url, postData);
  }

}
