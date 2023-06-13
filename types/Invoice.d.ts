/**
 * Invoice
 * A Invoice
 */
declare interface Invoice {
    id?: number;
    invoiceHash: string;
    memberId: number;
    payingMemberId: number;
    invoiceDate: string;
    invoiceDueDate: string;
    invoiceTotal: number;
    invoiceStatus: string;
    createdAt: string;
    updatedAt: string;
}
export { Invoice };
