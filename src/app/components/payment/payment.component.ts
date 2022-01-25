import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentAddForm: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  add(){

  }

  createPaymentAddForm(){
    this.paymentAddForm = this.formBuilder.group({
      creditCard : {
        firstNameAndLastName: ["", Validators.required],
        expirationDate: ["", Validators.required],
        cardNumber: ["", Validators.required],
        ccv: ["", Validators.required]
      },
      rentalId: ["", Validators.required]
    })
  }

}
