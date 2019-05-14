import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getDemoData, getMass } from './redux/demo.selectors';

@Component({
  selector: 'app-sw-demo',
  styleUrls: ['./demo.component.scss'],
  providers: [DemoService],
  template: `
    <div
      *ngFor="let item of demoData$ | async"
      class="example-component"
      [ngClass]="{
        loading: item.loading,
        loaded: item.loaded,
        error: item.error
      }"
    >
      <h3>{{ item.data?.name }}</h3>
      <div class="status">
        <h2>Status:</h2>
        <p>loading: {{ item.loading }}</p>
        <p>loaded: {{ item.loaded }}</p>
      </div>
      <p *ngIf="item.loaded">{{ item.data?.mass }}</p>

      <button (click)="reload(item)">reload</button>
    </div>
    <p>{{ mass$ | async }}</p>
  `,
})
export class DemoComponent implements OnInit {
  public demoData$: Observable<any>;
  public mass$: Observable<any>;

  constructor(private store: Store<any>, private demoService: DemoService) {}

  ngOnInit() {
    this.demoService.loadPlanetData({ id: 1 });

    this.demoData$ = this.store.select(getDemoData);
    this.mass$ = this.store.select(getMass);
  }

  reload(item) {
    this.demoService.loadResident(item.id);
  }
}
