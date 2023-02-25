/**
 * Payment
 * A Payment
 */
declare interface Payment {
    id?: number;
    invoiceId: number;
    paymentDate: string;
    amount: number;
    createdAt?: string | null;
    updatedAt?: string | null;
}

export { Payment };
