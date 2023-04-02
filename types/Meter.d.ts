/**
 * Meter
 * A Meter
 */
declare interface Meter {
    meterId?: number;
    customerId: number;
    serialNumber: string;
    status: string;
    installationDate: string;
    installationAddress: string;
}

export { Meter };
