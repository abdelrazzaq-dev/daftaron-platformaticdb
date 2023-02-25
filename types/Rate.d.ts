/**
 * Rate
 * A Rate
 */
declare interface Rate {
    id?: number;
    rateName: string;
    fixedCharge: number;
    variableCharge: number;
    unitPrice: number;
    maxUnits: number;
    createdAt?: string | null;
    updatedAt?: string | null;
}

export { Rate };
