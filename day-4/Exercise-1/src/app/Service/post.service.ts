import { Injectable } from '@angular/core';
import { PostModel } from '../Models/post-model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

type NewType = HttpClient;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private newPosts: PostModel[] = []; // Array to store local posts
  private nextId = 101;
  private nextUserId = 101;

  constructor(private httpClient: HttpClient) { }

  fetchPost(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(this.apiUrl);
  }

  getPosts(): PostModel[] {
    return this.newPosts;
  }

  createPost(newPost: PostModel): void {
    newPost.id = this.nextId++;
    newPost.userId = this.nextUserId++;
    this.newPosts.push(newPost);
  } 

  updatePost(updatedPost: PostModel): void {
    const index = this.newPosts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.newPosts[index] = updatedPost;
    }
  }

  deletePost(postId: number): void {
    this.newPosts = this.newPosts.filter(post => post.id !== postId);
  }

  getLocalPostById(postId: number): PostModel {
    const foundPost = this.newPosts.find(post => post.id === postId);
    return foundPost || { id: 0, userId: 0, title: '', body: '' };
  }
}