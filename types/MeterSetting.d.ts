/**
 * MeterSetting
 * A MeterSetting
 */
declare interface MeterSetting {
    id?: number;
    connectionFee: string;
    createdAt?: string | null;
    maxConsumption: number;
    name: string;
    unitPrice: string;
    updatedAt?: string | null;
}
export { MeterSetting };
