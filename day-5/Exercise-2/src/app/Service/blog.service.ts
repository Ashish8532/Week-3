import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Blog } from '../Models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  private postUrl = 'https://jsonplaceholder.typicode.com/posts';
  private blogSubject$ = new BehaviorSubject<any[]>([]);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  blogPosts: any[] = [];

  private newPosts: Blog[] = []; // Array to store local posts
  

  constructor(private httpClient: HttpClient) {
    this.fetchPosts();
  }
  getPost(): Observable<Blog[]> {
    return this.blogSubject$.asObservable();
  }

  fetchPosts() {
    this.httpClient.get<Blog[]>(this.postUrl).pipe(
      tap((newPosts) => {
        this.newPosts = newPosts;
        this.blogSubject$.next([...this.newPosts]);
      })
    ).subscribe();
  }

  appendFetchedPost(newPost: any): void {
    const currentPosts = this.blogSubject$.getValue();
    const updatedPosts = [...currentPosts, newPost];
    console.log(updatedPosts);
    this.blogSubject$.next(updatedPosts);
  }
  
  getPostById(postId: number): Observable<any> {
    const url = `${this.postUrl}/${postId}`;
    return this.httpClient.get<any>(url);
  }

  getCommentsForPost(postId: number) {
    return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }

  updatePost(postId: number, postData: any): Observable<any> {
    const url = `${this.postUrl}/${postId}`;
    return this.httpClient.put(url, postData);
  }

  updateLocalPost(postId: number, updatedPost: any): void {
    const currentPosts = this.blogSubject$.getValue();
    const updatedPosts = currentPosts.map(post => {
      if (post.id === postId) {
        return updatedPost;
      }
      return post;
    });
    this.blogSubject$.next(updatedPosts);
  }

}
