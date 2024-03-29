import { MessageService } from 'primeng/api';
import { BrandListModel } from './../../models/brandListModel';
import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
  providers: [MessageService]
})
export class BrandComponent implements OnInit {

  brands : BrandListModel[]
  dataLoaded : boolean = false;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
      this.dataLoaded = true;
    })
  }
}