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
    fixedCharge: number;
    invoiceAmount: number;
    paymentStatus: string;
}
export { WaterInvoice };
