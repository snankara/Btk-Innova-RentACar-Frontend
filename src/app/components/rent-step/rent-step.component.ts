import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { items } from 'src/app/constants/rentMenuItems';

@Component({
  selector: 'app-rent-step',
  templateUrl: './rent-step.component.html',
  styleUrls: ['./rent-step.component.css'],
  providers: [MessageService]

})
export class RentStepComponent implements OnInit {
  items: MenuItem[] = items;

  constructor() { }

  ngOnInit(): void {
  }

}
