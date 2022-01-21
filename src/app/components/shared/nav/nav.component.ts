import { items } from './../../../constants/navBarItems';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  items: MenuItem[] = items;
  ngOnInit(): void {
  //   this.items = [
  //     {
  //         label: 'File',
  //         routerLink: "",
  //         items: [{
  //                 label: 'New', 
  //                 icon: 'pi pi-fw pi-plus',
  //                 items: [
  //                     {label: 'Project'},
  //                     {label: 'Other'},
  //                 ]
  //             },
  //             {label: 'Open'},
  //             {label: 'Quit'}
  //         ]
  //     },
  //     {
  //         label: 'Edit',
  //         icon: 'pi pi-fw pi-pencil',
  //         items: [
  //             {label: 'Delete', icon: 'pi pi-fw pi-trash'},
  //             {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
  //         ]
  //     }
  // ];
  }
}

  


