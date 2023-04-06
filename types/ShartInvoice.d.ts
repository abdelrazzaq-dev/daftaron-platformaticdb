/**
 * ShartInvoice
 * A ShartInvoice
 */
declare interface ShartInvoice {
    id?: number;
    periodId: number;
    customerId: number;
    invoiceDate: string;
    totalAmount: number;
    paymentStatus: string;
}
export { ShartInvoice };
