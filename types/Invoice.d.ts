/**
 * Invoice
 * A Invoice
 */
declare interface Invoice {
    id?: number;
    memberId: number;
    payingMemberId: number;
    invoiceHash: string;
    invoiceStatus: string;
    invoiceDate: string;
    invoiceDueDate: string;
    createdAt: string;
    updatedAt: string;
}
export { Invoice };
