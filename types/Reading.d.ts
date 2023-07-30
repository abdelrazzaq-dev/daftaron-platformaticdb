/**
 * Reading
 * A Reading
 */
declare interface Reading {
    id?: number;
    createdAt?: string | null;
    meterId: number;
    readingDate: string;
    readingValue: number;
    updatedAt?: string | null;
}
export { Reading };
