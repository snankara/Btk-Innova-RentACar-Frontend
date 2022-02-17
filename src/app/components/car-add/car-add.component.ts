import { CarService } from './../../services/car.service';
import { ClassTypeService } from './../../services/class-type.service';
import { ClassTypeListModel } from './../../models/classTypeListModel';
import { ColorService } from './../../services/color.service';
import { ColorListModel } from './../../models/colorListModel';
import { BrandListModel } from './../../models/brandListModel';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
  providers: [MessageService]
})
export class CarAddComponent implements OnInit, AfterViewChecked {

  brands: BrandListModel[]
  colors: ColorListModel[]
  classTypes: ClassTypeListModel[]

  carAddForm: FormGroup
  carAddDialog: boolean;
  submitted : boolean = false;

  constructor(private brandService: BrandService, private formBuilder: FormBuilder, 
              private messageService: MessageService, private colorService: ColorService, private classTypeService: ClassTypeService,
              private carService: CarService, private changeDetector: ChangeDetectorRef) { }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngOnInit(): void {
    this.createCarAddForm()
    this.getBrands()
    this.getColors()
    this.getClassTypes()
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      dailyPrice: ["", Validators.required],
      modelYear: ["", Validators.required],
      description: ["", Validators.required],
      minFindexScore: ["", Validators.required],
      minCustomerAge: ["", Validators.required],
      classTypeId: ["", Validators.required],
      kilometer: ["", Validators.required],
      brandId: ["", Validators.required],
      colorId: ["", Validators.required]
    })
  }

  add(){
    this.submitted = true
    if (this.carAddForm.valid) {
        let carModel = Object.assign({}, this.carAddForm.value)
        this.carService.add(carModel).subscribe(response => {
          if (response.success) {
            this.messageService.add({severity:'success', summary: 'Successful', detail: response.message, life: 3000});
          }
          else{
            this.messageService.add({severity:'error', summary: 'Error', detail: response.message, life: 3000});
          }
          this.carAddDialog = false;
        })
    }
  }

  getBrands(){
    this.brandService.getBrandsDeletedFalse().subscribe(response => {
      this.brands = response.data
    })
  }

  getColors(){
    this.colorService.getColorsDeletedFalse().subscribe(response => {
      this.colors = response.data
    })
  }

  getClassTypes(){
    this.classTypeService.getClassTypes().subscribe(response => {
      this.classTypes = response.data
    })
  }

  openNew() {
    this.carAddForm.reset()
    this.carAddDialog = true;
    this.submitted = false
}

  hideDialog() {
    this.carAddDialog = false;
  }

}
