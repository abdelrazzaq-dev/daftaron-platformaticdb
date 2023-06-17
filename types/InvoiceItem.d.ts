/**
 * InvoiceItem
 * A InvoiceItem
 */
declare interface InvoiceItem {
    id?: number;
    invoiceId: number;
    serviceId: number;
    itemName: string;
    itemQuantity: number;
    itemPrice: string;
    createdAt: string;
    updatedAt: string;
}
export { InvoiceItem };
