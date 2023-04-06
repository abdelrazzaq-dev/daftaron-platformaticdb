/**
 * InactiveMeterPayment
 * A InactiveMeterPayment
 */
declare interface InactiveMeterPayment {
    id?: number;
    chargeId: number;
    periodId: number;
    paymentDate: string;
    paymentAmount: number;
}
export { InactiveMeterPayment };
