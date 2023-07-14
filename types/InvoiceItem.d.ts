/**
 * InvoiceItem
 * A InvoiceItem
 */
declare interface InvoiceItem {
    id?: number;
    createdAt: string;
    invoiceId: number;
    itemName: string;
    itemPrice: string;
    itemQuantity: number;
    serviceId: number;
    updatedAt: string;
}
export { InvoiceItem };
