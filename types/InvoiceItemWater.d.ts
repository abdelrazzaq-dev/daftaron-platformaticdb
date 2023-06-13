/**
 * InvoiceItemWater
 * A InvoiceItemWater
 */
declare interface InvoiceItemWater {
    id?: number;
    invoiceItemId: number;
    currentReadingId: number;
    previousReadingId?: number | null;
    createdAt: string;
    updatedAt: string;
}
export { InvoiceItemWater };
