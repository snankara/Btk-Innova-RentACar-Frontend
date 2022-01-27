import { MessageService } from 'primeng/api';
import { InvoiceModel } from './../../models/invoiceModel';
import { InvoiceListModel } from './../../models/invoiceListModel';
import { InvoiceService } from './../../services/invoice.service';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

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
  selectedInvoice: InvoiceModel
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.getInvoices()
    this.setColumnsValue()
    this.exportColumns = this.columns.map(col => ({title: col.header, dataKey: col.field}));
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


  exportPdf() {
    const doc = new jsPDF()
    autoTable(doc, {
      head: [this.exportColumns],
      body: [
        ['David', 'david@example.com', 'Sweden'],
        ['Castille', 'castille@example.com', 'Spain'],
        // ...
      ],
    })

    doc.save('table.pdf')

    
}
}
