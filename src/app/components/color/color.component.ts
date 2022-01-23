import { MessageService } from 'primeng/api';
import { ColorListModel } from './../../models/colorListModel';
import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [MessageService]
})
export class ColorComponent implements OnInit {

  colors: ColorListModel[]
  dataLoaded : boolean = false;

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }


  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
      this.dataLoaded = true;
    })
  }

}
