import { MessageService } from 'primeng/api';
import { InvoiceModel } from './../../models/invoiceModel';
import { InvoiceListModel } from './../../models/invoiceListModel';
import { InvoiceService } from './../../services/invoice.service';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable';

// import autoTable from 'jspdf-autotable';
// import autoTable from 'jspdf-autotable'
// declare var jsPDF: any;
// var jsPDF = require('jspdf'); 
// require('jspdf-autotable');

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  providers: [MessageService]
})
export class InvoiceComponent implements OnInit {

  columns: any[];
  exportColumns: any[];

  invoices: InvoiceListModel[]
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.getInvoices()
    this.setColumnsValue()
    this.setExportColumns()

  }

  getInvoices(){
    this.invoiceService.getAll().subscribe(response => {      
      this.invoices = response.data
    })
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
      { field: 'invoiceDate', header: 'Invoice Date' }
  ];
  }

setExportColumns(){
  this.exportColumns = this.columns.map(col => ({title: col.header, dataKey: col.field}));
  }
}
