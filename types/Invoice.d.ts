/**
 * Invoice
 * A Invoice
 */
declare interface Invoice {
    id?: number;
    createdAt?: string | null;
    invoiceDate: string;
    invoiceDueDate: string;
    invoiceHash: string;
    invoiceStatus: string;
    memberId: number;
    payingMemberId: number;
    updatedAt?: string | null;
}
export { Invoice };
