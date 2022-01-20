import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm: FormGroup
  constructor(private formBuilder: FormBuilder, private colorService: ColorService, private toastrService: ToastrService) { }

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
          this.toastrService.success(response.message, "Successful !")
        }
        else{
          this.toastrService.error(response.message, "Error !")
        }
      })
    }
  }
}
