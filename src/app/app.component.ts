import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Lab08';
  private getThreadsSubscription: Subscription = new Subscription();

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getThreadsSubscription = this.httpService.getThreads().subscribe();
  }

  ngOnDestroy(): void {
    this.getThreadsSubscription?.unsubscribe();
  }
}
