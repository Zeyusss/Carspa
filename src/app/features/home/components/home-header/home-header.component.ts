import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CarspaStore } from '../../../../core/store/store';

@Component({
  selector: 'app-home-header',
  imports: [DatePipe],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css',
})
export class HomeHeaderComponent {
  readonly store = inject(CarspaStore);
  today = new Date();
}
