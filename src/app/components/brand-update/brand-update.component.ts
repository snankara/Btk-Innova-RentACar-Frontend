import { BrandService } from './../../services/brand.service';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandModel } from './../../models/brandModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css'], 
  providers: [MessageService]
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateDialog: boolean
  brandUpdateForm: FormGroup
  @Input() brand : BrandModel;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private brandService: BrandService) { }

  ngOnInit(): void {
    this.createBrandUpdateForm()    
  } 
 
  createBrandUpdateForm(){
    this.brandUpdateForm = this.formBuilder.group({
      id: [this.brand.id, Validators.required],
      name: [this.brand.name, Validators.required]
    })
  }

  update(){
    if (this.brandUpdateForm.valid) {
      let brandUpdateModel = Object.assign({}, this.brandUpdateForm.value)
      this.brandService.update(brandUpdateModel).subscribe(response => {
        if (response.success) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: response.message, life: 3000});
        }
        else {
          this.messageService.add({severity:'error', summary: 'Error', detail: response.message, life: 3000});
        }
        this.brandUpdateDialog = false;
      })
    }
  }

  hideDialog() {
    this.brandUpdateDialog = false;
  }

  openDialog() {
    this.brandUpdateDialog = true;
  }
}
