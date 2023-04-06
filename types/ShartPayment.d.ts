/**
 * ShartPayment
 * A ShartPayment
 */
declare interface ShartPayment {
    id?: number;
    invoiceId: number;
    periodId: number;
    paymentDate: string;
    paymentAmount: number;
}
export { ShartPayment };
