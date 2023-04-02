/**
 * InactiveMeterCharge
 * A InactiveMeterCharge
 */
declare interface InactiveMeterCharge {
    chargeId?: number;
    meterId: number;
    periodId: number;
    chargeAmount: number;
    chargeDate: string;
    paidStatus: string;
}

export { InactiveMeterCharge };
