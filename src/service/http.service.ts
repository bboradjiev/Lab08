import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Thread } from 'src/models/thread.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private threadSubject: BehaviorSubject<Thread[][]> = new BehaviorSubject<Thread[][]>([]);
  public threadChange: Observable<Thread[][]> = this.threadSubject.asObservable();

  constructor(private http: HttpClient) {}

  getThreads() {
    return this.http.get<Thread[][]>('http://localhost:3000/threads')
      .pipe(
        map(threads => threads.map(thread => 
          thread.length > 1 ? thread.map(line => ({...line, expanded: false})) : thread
        )),
        tap(threads => this.threadSubject.next(threads))
      );
  }
}
