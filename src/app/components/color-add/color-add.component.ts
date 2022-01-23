import { MessageService } from 'primeng/api';
import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css'], 
  providers: [MessageService]
})
export class ColorAddComponent implements OnInit {

  colorAddForm: FormGroup
  colorAddDialog: boolean
  constructor(private formBuilder: FormBuilder, private colorService: ColorService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

  add(){
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value)
      this.colorService.add(colorModel).subscribe(response => {
        if (response.success) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: response.message, life: 3000});
        }
        else{
          this.messageService.add({severity:'error', summary: 'Error', detail: response.message, life: 3000});
        }
        this.colorAddDialog = false;
      })
    }
  }

  openNew() {
    this.colorAddForm.reset()
    this.colorAddDialog = true;
}

  hideDialog() {
    this.colorAddDialog = false;
  }
}
