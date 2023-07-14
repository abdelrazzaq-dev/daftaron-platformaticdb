/**
 * Invoice
 * A Invoice
 */
declare interface Invoice {
    id?: number;
    createdAt: string;
    invoiceDate: string;
    invoiceDueDate: string;
    invoiceHash: string;
    invoiceStatus: string;
    memberId: number;
    payingMemberId: number;
    updatedAt: string;
}
export { Invoice };
