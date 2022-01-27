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

  @Input() invoice: InvoiceModel

  constructor() { }

  ngOnInit(): void {
    this.setColumnsValue()
    this.setExportColumns()
  }

  hideDialog() {
    this.invoiceDetailDialog = false;
  }

  openDialog() {
    this.invoiceDetailDialog = true;
  }

  exportPdf() {
    const doc = new jsPDF('l', 'px', 'a5')
    autoTable(doc, {
      head: [this.exportColumns],
      body: [
        [this.invoice.brandName, this.invoice.colorName, this.invoice.dailyPrice+" tl",  
        this.invoice.rentedCity, this.invoice.returnedCity, 
        this.invoice.rentDate,this.invoice.additionalListDtos.map(item => item.additionalName) ,
        this.invoice.paymentAmount+" tl",  this.invoice.invoiceDate
      ]
    ],
    })
    doc.save('invoice.pdf')
}

setColumnsValue(){
  this.columns = [
    { field: 'brandName', header: 'Brand Name' },
    { field: 'colorName', header: 'Color Name' },
    { field: 'dailyPrice', header: 'Daily Price' },
    { field: 'rentedCity', header: 'Rented City' },
    { field: 'returnedCity', header: 'Returned City' },
    { field: 'rentDate', header: 'Rent Date' },
    { field: '', header: 'Additionals' },
    { field: 'paymentAmount', header: 'Payment Amount' },
    { field: 'invoiceDate', header: 'Invoice Date' },
  ];
}

  setExportColumns(){
    this.exportColumns = this.columns.map(col => ({title: col.header, dataKey: col.field}));
    }
  }
