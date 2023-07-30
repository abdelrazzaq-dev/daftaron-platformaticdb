/**
 * InvoiceItemWater
 * A InvoiceItemWater
 */
declare interface InvoiceItemWater {
    id?: number;
    createdAt?: string | null;
    currentReadingId: number;
    invoiceItemId: number;
    meterSettingId: number;
    previousReadingId?: number | null;
    updatedAt?: string | null;
}
export { InvoiceItemWater };
