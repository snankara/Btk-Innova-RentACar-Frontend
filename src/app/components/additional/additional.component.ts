import { AdditionalService } from './../../services/additional.service';
import { Component, OnInit } from '@angular/core';
import { AdditionalListModel } from 'src/app/models/additionalListModel';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateAdditionalItemModel } from 'src/app/models/createAdditionalItemModel';
import { AdditionalItemService } from 'src/app/services/additional-item.service';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

  additionals : AdditionalListModel[]
  selectedAdditionals : AdditionalListModel[]
  createAdditionalItems: CreateAdditionalItemModel[] = []
  rentalId: number

  constructor(private additionalService: AdditionalService, private router: Router, private activatedRoute: ActivatedRoute, 
              private additionalItemService: AdditionalItemService) { }

  ngOnInit(): void {
    this.getAdditionals()
    this.getRouteRentalId()
    this.selectedAdditionals = []
  }

  getAdditionals(){
    this.additionalService.getAdditionals().subscribe(response => {
      this.additionals = response.data
    })
  }

  showSelectedAdditionalAmount(){
    let totalResult = 0
    this.selectedAdditionals.forEach(additional => {
      totalResult += additional.additionalAmount
    });
    return totalResult;
  }

  getRouteRentalId(){
    this.activatedRoute.params.subscribe(params => { 
      this.rentalId = params["id"]
    })
  }

  add(){
    this.selectedAdditionals.forEach(selectedAdditional => {
      let additionalItem = {
        rentalId: this.rentalId,
        additionalId: selectedAdditional.id
      }
      this.createAdditionalItems.push(additionalItem)
    })

    this.additionalItemService.add(this.createAdditionalItems).subscribe(response => {
      if (response.success) {
        this.createAdditionalItems = []
        this.nextPage()
      }
    })
    
  }

  nextPage() {
    this.router.navigate(['rentstep/payment/'+this.rentalId]);
    }
  
  prevPage(){
    this.router.navigate(['rentstep/rent/'+this.rentalId]);
  }
}
