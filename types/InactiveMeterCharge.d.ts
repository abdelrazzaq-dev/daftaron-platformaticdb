/**
 * InactiveMeterCharge
 * A InactiveMeterCharge
 */
declare interface InactiveMeterCharge {
    id?: number;
    meterId: number;
    periodId: number;
    chargeAmount: number;
    chargeDate: string;
    paidStatus: string;
}
export { InactiveMeterCharge };
