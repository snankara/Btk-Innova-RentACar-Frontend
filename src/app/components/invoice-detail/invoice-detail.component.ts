import { InvoiceModel } from './../../models/invoiceModel';
import { Component, Input, OnInit } from '@angular/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { AdditionalListModel } from 'src/app/models/additionalListModel';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  invoiceDetailDialog: boolean
  columns: any[];
  exportColumns: any[];

  emptyHead: any = "Additionals Total"

  @Input() invoice: InvoiceModel

  additionals: AdditionalListModel[]

  constructor() { }

  ngOnInit(): void {
    this.setColumnsValue()
    this.exportColumns = this.columns.map(col => ({title: col.header, dataKey: col.field}));

    this.setAdditionalName()    
  }

  hideDialog() {
    this.invoiceDetailDialog = false;
  }

  openDialog() {
    this.invoiceDetailDialog = true;
  }

  exportPdf() {
    const doc = new jsPDF()
    autoTable(doc, {
      head: [this.exportColumns],
      body: [
        [this.invoice.brandName, this.invoice.colorName, this.invoice.dailyPrice, this.invoice.paymentAmount, 
        this.invoice.rentedCity, this.invoice.returnedCity, this.invoice.rentDate, this.invoice.invoiceDate,
        // this.additionals.map(item => item.additionalName) 
      ]

        // ...
      ],
    })
    autoTable(doc, { 
      head: [this.additionals.map(item => item.additionalName), this.emptyHead],
      body: [
        this.additionals.map(item => item.additionalAmount.toString()+"tl") ,
      ],
    })

    doc.save('invoice.pdf')
}

setColumnsValue(){
  this.columns = [
    { field: 'brandName', header: 'Brand Name' },
    { field: 'colorName', header: 'Color Name' },
    { field: 'dailyPrice', header: 'Daily Price' },
    { field: 'paymentAmount', header: 'Payment Amount' },
    { field: 'rentedCity', header: 'Rented City' },
    { field: 'returnedCity', header: 'Returned City' },
    { field: 'rentDate', header: 'Rent Date' },
    { field: 'invoiceDate', header: 'Invoice Date' },
];
}

setAdditionalName(){
    let name : any = "";
  
   this.additionals =  this.invoice.additionalListDtos
    return name; 
  }

  setAdditionalAmount(){
    let total = 0;
    this.additionals.forEach(item => {
      total += item.additionalAmount
    })
    return total.toString();
  }
}
