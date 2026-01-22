import { Component } from '@angular/core';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';

@Component({
  selector: 'app-home',
  imports: [HomeHeaderComponent, HomeMainComponent, HomeFooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
