/**
 * Reading
 * A Reading
 */
declare interface Reading {
    id?: number;
    meterId?: number | null;
    readingValue: number;
    readingDate?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
}

export { Reading };
