/**
 * WaterPayment
 * A WaterPayment
 */
declare interface WaterPayment {
    paymentId?: number;
    periodId: number;
    invoiceId: number;
    paymentDate: string;
    paymentAmount: number;
}

export { WaterPayment };
