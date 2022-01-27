import { MessageService } from 'primeng/api';
import { CreateInvoiceModel } from './../../models/createInvoiceModel';
import { InvoiceService } from './../../services/invoice.service';
import { PaymentModel } from './../../models/paymentModel';
import { CreditCardModel } from './../../models/creditCardModel';
import { CreatePaymentModel } from './../../models/createPaymentModel';
import { PaymentService } from './../../services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [MessageService]
})
export class PaymentComponent implements OnInit {

  paymentAddForm: FormGroup
  rentalId: number
  payment: PaymentModel
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, 
            private paymentService: PaymentService, private invoiceService: InvoiceService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.getRouteRentalId();
    this.createPaymentAddForm();
  }

  add(){
    if (this.paymentAddForm.valid && this.rentalId) {
      let creditCard : CreditCardModel = Object.assign({}, this.paymentAddForm.value)
      let paymentModel : CreatePaymentModel = {
        creditCard,
        rentalId : this.rentalId
      }
      this.paymentService.add(paymentModel).subscribe(response => {
        if (response.success) {
          this.payment = response.data
          this.messageService.add({severity:'success', summary: 'Successful', detail: response.message, life: 3000});
          this.addInvoice()
        }
        else{
          this.messageService.add({severity:'danger', summary: 'Error', detail: 'Hata !', life: 3000});
        }
      })
    }
  }

  addInvoice(){
    if (this.payment) {
      let invoiceModel : CreateInvoiceModel = {
        rentalId: this.rentalId,
        paymentId: this.payment.id
      }
      this.invoiceService.add(invoiceModel).subscribe(response => {
        if (response.success) {
            this.messageService.add({severity:'success', summary: 'Successful', detail: response.message, life: 3000});
            this.router.navigateByUrl("");
        }
        else{
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Hata !', life: 3000});
        }
      })
    }
  }

  createPaymentAddForm(): void{
    this.paymentAddForm = this.formBuilder.group({
      firstNameAndLastName: ["", Validators.required],
      expirationDate: ["", Validators.required],
      cardNumber: ["", Validators.required],
      ccv: ["", Validators.required]
    })
  }

  getRouteRentalId(){
    this.activatedRoute.params.subscribe(params => { 
      this.rentalId = params["id"]
    })
  }

}
