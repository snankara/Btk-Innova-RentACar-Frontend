import { MessageService } from 'primeng/api';
import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
  providers: [MessageService]
})
export class BrandAddComponent implements OnInit { 

  brandAddForm: FormGroup 
  brandAddDialog: boolean;

  constructor(private brandService: BrandService, private formBuilder: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      name:["", Validators.required]
    })
  }

  add(){
    if (this.brandAddForm.valid) {
        let brandModel = Object.assign({}, this.brandAddForm.value)
        this.brandService.add(brandModel).subscribe(response => {
          if (response.success) {
            this.messageService.add({severity:'success', summary: 'Successful', detail: response.message, life: 3000});
          }
          else{
            this.messageService.add({severity:'error', summary: 'Error', detail: response.message, life: 3000});
          }
          this.brandAddDialog = false;
        })
    }
  }

  openNew() {
    this.brandAddForm.reset()
    this.brandAddDialog = true;
}

  hideDialog() {
    this.brandAddDialog = false;
  }
}
