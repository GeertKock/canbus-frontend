import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  standalone: true,
  template: `
    <p>{{ canData }}</p>
  `,
  imports: [CommonModule]
})

export class ItemListComponent {
  @Input() canData: any;

  constructor() {}
}
