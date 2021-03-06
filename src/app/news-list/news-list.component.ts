import { Component, OnInit } from '@angular/core';
import { NewsService } from '../models/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {

  news;

  ngOnInit() {
  }

  constructor(private newsService: NewsService) {
    this.getNews();
  }

  private getNews() {
    this.newsService.getNews()
      .map(body => body.json())
      .map(arr => arr.sort((a, b) => b && parseInt(a.votes, 0) < parseInt(b.votes, 0)))
      .subscribe(
        news => this.news = news,
        err => console.log(err)
      );
  }

  newsDeleted($event) {
    this.getNews();
  }

}

