/**
 * InvoiceItem
 * A InvoiceItem
 */
declare interface InvoiceItem {
    id?: number;
    invoiceId: number;
    serviceId: number;
    itemName: string;
    itemDescription: string;
    itemQuantity: number;
    itemPrice: number;
    itemTotal: number;
    createdAt: string;
    updatedAt: string;
}
export { InvoiceItem };
