/**
 * ShartPayment
 * A ShartPayment
 */
declare interface ShartPayment {
    paymentId?: number;
    invoiceId: number;
    periodId: number;
    paymentDate: string;
    paymentAmount: number;
}

export { ShartPayment };
