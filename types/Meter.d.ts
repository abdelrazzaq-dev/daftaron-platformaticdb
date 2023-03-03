/**
 * Meter
 * A Meter
 */
declare interface Meter {
    id?: number;
    label: string;
    serialId: string;
    memberId: number;
    connectedAddress: string;
    connectedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
}

export { Meter };
