/**
 * Reading
 * A Reading
 */
declare interface Reading {
    readingId?: number;
    meterId: number;
    periodId: number;
    readingDate: string;
    readingValue: number;
}

export { Reading };
