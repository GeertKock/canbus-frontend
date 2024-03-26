import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ItemListComponent } from './item-list/item-list.component';
import { GraphRpmComponent } from './graph-rpm/graph-rpm.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  template: `
  <app-item-list [canData]="canData"></app-item-list>,
  <app-graph-rpm [canData]="canData"></app-graph-rpm>,
  <app-graph-temp [canData]="canData"></app-graph-temp>
`,
  imports: [ItemListComponent, GraphRpmComponent, CommonModule],
  host: {ngSkipHydration: 'true'},
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  canData: any[] = [];
  
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.fetchCanData();  
  }

  fetchCanData(): void {
    this.apiService.fetchCanData().subscribe(
      (canData: any[]) => {
        this.canData = canData;
      },
      (error) => {
        console.error('Error fetching canData:', error);
      }
    );
  }
}
