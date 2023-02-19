/**
 * Meter
 * A Meter
 */
declare interface Meter {
    id?: number;
    serialId: string;
    label: string;
    connectedAddress: string;
    connectedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
}

export { Meter };
