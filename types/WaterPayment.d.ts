/**
 * WaterPayment
 * A WaterPayment
 */
declare interface WaterPayment {
    id?: number;
    periodId: number;
    invoiceId: number;
    paymentDate: string;
    paymentAmount: number;
}
export { WaterPayment };
