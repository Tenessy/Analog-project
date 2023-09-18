import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h2>article Details</h2>

    ID: {{ articleId$ | async }}
  `,
})
export default class ArticleDetailsPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly articleId$ = this.route.paramMap.pipe(
    map((params) => params.get('articleId'))
  );
}