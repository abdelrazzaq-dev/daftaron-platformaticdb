/**
 * InvoiceItem
 * A InvoiceItem
 */
declare interface InvoiceItem {
    id?: number;
    createdAt?: string | null;
    invoiceId: number;
    itemName: string;
    itemPrice: string;
    itemQuantity: number;
    serviceId: number;
    updatedAt?: string | null;
}
export { InvoiceItem };
