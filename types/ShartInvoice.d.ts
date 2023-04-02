/**
 * ShartInvoice
 * A ShartInvoice
 */
declare interface ShartInvoice {
    invoiceId?: number;
    periodId: number;
    customerId: number;
    invoiceDate: string;
    totalAmount: number;
    paymentStatus: string;
}

export { ShartInvoice };
