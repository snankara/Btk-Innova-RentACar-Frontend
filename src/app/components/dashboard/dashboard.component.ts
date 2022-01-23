import { items } from './../../constants/dashboardMenuItems';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: MenuItem[] = items;
  constructor() { }

  ngOnInit(): void {
  }

}
