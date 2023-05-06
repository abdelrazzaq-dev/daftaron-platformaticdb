/**
 * ShartInvoice
 * A ShartInvoice
 */
declare interface ShartInvoice {
    id?: number;
    periodId: number;
    customerId: number;
    invoiceDate: string;
    invoiceAmount: string;
    paymentStatus: string;
}
export { ShartInvoice };
