/**
 * Payment
 * A Payment
 */
declare interface Payment {
    id?: number;
    createdAt: string;
    invoiceId: number;
    paymentAmount: string;
    paymentDate: string;
    paymentHash: string;
    paymentMethod: string;
    paymentStatus: string;
    updatedAt: string;
}
export { Payment };
