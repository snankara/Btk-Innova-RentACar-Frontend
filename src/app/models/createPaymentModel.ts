import { CreditCardModel } from './creditCardModel';
export interface CreatePaymentModel{
    paymenDate?: string
    creditCard: CreditCardModel,
    rentalId: number
}