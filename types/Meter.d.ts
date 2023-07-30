/**
 * Meter
 * A Meter
 */
declare interface Meter {
    id?: number;
    connectedAt: string;
    createdAt?: string | null;
    memberId: number;
    meterAddress: string;
    meterNo: string;
    meterSettingId: number;
    meterStatus: string;
    updatedAt?: string | null;
}
export { Meter };
