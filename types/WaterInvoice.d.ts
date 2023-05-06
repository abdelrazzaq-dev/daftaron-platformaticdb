/**
 * WaterInvoice
 * A WaterInvoice
 */
declare interface WaterInvoice {
    id?: number;
    meterId: number;
    periodId: number;
    customerId: number;
    invoiceDate: string;
    invoiceAmount: string;
    waterUnitPrice: string;
    waterUnitCount: number;
    paymentStatus: string;
}
export { WaterInvoice };
