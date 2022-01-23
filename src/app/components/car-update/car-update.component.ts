import { ClassTypeService } from './../../services/class-type.service';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from './../../services/color.service';
import { CarService } from './../../services/car.service';
import { CarModel } from './../../models/carModel';
import { AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BrandListModel } from 'src/app/models/brandListModel';
import { ClassTypeListModel } from 'src/app/models/classTypeListModel';
import { ColorListModel } from 'src/app/models/colorListModel';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
  providers: [MessageService] 
})
export class CarUpdateComponent implements OnInit, AfterViewChecked { 

  brands: BrandListModel[]
  colors: ColorListModel[]
  classTypes: ClassTypeListModel[]
  @Input() car : CarModel;

  carUpdateDialog: boolean
  carUpdateForm: FormGroup
  constructor(private formBuilder: FormBuilder,private messageService: MessageService, 
              private carService: CarService, private colorService: ColorService, private brandService: BrandService,
              private classTypeService: ClassTypeService, private changeDetector: ChangeDetectorRef) { }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngOnInit(): void {
    this.getBrands()
    this.getColors()
    this.getClassTypes()
    this.createCarUpdateForm()
  }

  createCarUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      id: [this.car.id, Validators.required],
      dailyPrice: [this.car.dailyPrice, Validators.required],
      modelYear: [this.car.modelYear, Validators.required],
      description: [this.car.description, Validators.required],
      minFindexScore: [this.car.findexScore, Validators.required],
      minCustomerAge: [this.car.minCustomerAge, Validators.required],
      classTypeId: [this.car.classTypeId, Validators.required],
      kilometer: [this.car.kilometer, Validators.required],
      brandId: [this.car.brandId, Validators.required],
      colorId: [this.car.colorId, Validators.required]
    })
  }

  update(){
    if (this.carUpdateForm.valid) {
      let carUpdateModel = Object.assign({}, this.carUpdateForm.value)
      this.carService.update(carUpdateModel).subscribe(response => {
        if (response.success) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: response.message, life: 3000});
        }
        else {
          this.messageService.add({severity:'error', summary: 'Error', detail: response.message, life: 3000});
        }
        this.carUpdateDialog = false;
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

  hideDialog() {
    this.carUpdateDialog = false;
  }

  openDialog() {
    this.carUpdateDialog = true;
  }
}
