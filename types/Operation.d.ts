/**
 * Operation
 * A Operation
 */
declare interface Operation {
    id?: number;
    createdAt: string;
    operationAmount: string;
    operationDate: string;
    operationDescription: string;
    operationHash: string;
    operationStatus: string;
    operationType: "EXPENSE" | "INCOME";
    projectId: number;
    updatedAt: string;
}
export { Operation };
