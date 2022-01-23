import { ColorService } from './../../services/color.service';
import { ColorModel } from './../../models/colorModel';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css'],
  providers: [MessageService]
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateDialog: boolean
  colorUpdateForm: FormGroup
  @Input() color : ColorModel;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private colorService: ColorService) { } 

  ngOnInit(): void {
    this.createColorUpdateForm()
  }

  createColorUpdateForm(){
    this.colorUpdateForm = this.formBuilder.group({
      id: [this.color.id, Validators.required],
      name: [this.color.name, Validators.required]
    })
  }

  update(){
    if (this.colorUpdateForm.valid) {
      let colorUpdateModel = Object.assign({}, this.colorUpdateForm.value)
      this.colorService.update(colorUpdateModel).subscribe(response => {
        if (response.success) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: response.message, life: 3000});
        }
        else {
          this.messageService.add({severity:'error', summary: 'Error', detail: response.message, life: 3000});
        }
        this.colorUpdateDialog = false;
      })
    }
  }

  hideDialog() {
    this.colorUpdateDialog = false;
  }

  openDialog() {
    this.colorUpdateDialog = true;
  }
}
