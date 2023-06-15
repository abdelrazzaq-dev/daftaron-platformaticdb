/**
 * Payment
 * A Payment
 */
declare interface Payment {
    id?: number;
    invoiceId: number;
    paymentDate: string;
    paymentHash: string;
    paymentAmount: number;
    paymentMethod: string;
    paymentStatus: string;
    createdAt: string;
    updatedAt: string;
}
export { Payment };
