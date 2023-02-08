import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Thread } from 'src/models/thread.model';
import { HttpService } from 'src/service/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit, OnDestroy {
  public threadsData: Thread[][] = [];
  private threadSubscription: Subscription = new Subscription();

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.threadSubscription = this.httpService.threadChange.subscribe({
      next: (thread) => {
        this.threadsData = thread;
      },
    });
  }

  expandTread(card: Thread) {
    this.threadsData = this.threadsData.map((thread) => {
      thread.map((el) => {
        if (el.subject_id === card.subject_id) {
          el.expanded = true;
        }
      });
      return thread;
    });
  }

  ngOnDestroy(): void {
    this.threadSubscription?.unsubscribe();
  }
}
