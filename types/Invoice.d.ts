/**
 * Invoice
 * A Invoice
 */
declare interface Invoice {
    id?: number;
    invoiceDate: string;
    meterId: number;
    rateId: number;
    memberId: number;
    previousReadingId: number;
    currentReadingId: number;
    invoiceAmount: number;
    paymentStatus?: string | null;
    dueDate: string;
    createdAt?: string | null;
    updatedAt?: string | null;
}

export { Invoice };
