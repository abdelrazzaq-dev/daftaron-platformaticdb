/**
 * InactiveMeterPayment
 * A InactiveMeterPayment
 */
declare interface InactiveMeterPayment {
    paymentId?: number;
    chargeId: number;
    periodId: number;
    paymentDate: string;
    paymentAmount: number;
}

export { InactiveMeterPayment };
