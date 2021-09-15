import { Component, OnInit } from '@angular/core';
import commentData, { IComment } from '../../../data/comments';
import questionData, { IQuestion } from '../../../data/questions';

@Component({
  selector: 'app-product-detail-tabs',
  templateUrl: './product-detail-tabs.component.html'
})
export class ProductDetailTabsComponent implements OnInit {
  comments: IComment[] = commentData;
  questions: IQuestion[] = questionData;

  constructor() { }

  ngOnInit(): void {
  }

}
