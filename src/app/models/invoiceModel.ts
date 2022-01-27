import { AdditionalListModel } from "./additionalListModel";

export interface InvoiceModel{
    invoiceDate: string
    rentDate: string
    returnDate: string
    rentedCity: string
    returnedCity: string
    brandName: string
    colorName: string
    paymentAmount: string
    dailyPrice: string
    additionalListDtos: AdditionalListModel[]
}