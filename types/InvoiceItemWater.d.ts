/**
 * InvoiceItemWater
 * A InvoiceItemWater
 */
declare interface InvoiceItemWater {
    id?: number;
    createdAt: string;
    currentReadingId: number;
    invoiceItemId: number;
    meterSettingId: number;
    previousReadingId?: number | null;
    updatedAt: string;
}
export { InvoiceItemWater };
