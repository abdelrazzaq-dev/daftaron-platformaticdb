/**
 * ServiceSubscription
 * A ServiceSubscription
 */
declare interface ServiceSubscription {
    id?: number;
    createdAt?: string | null;
    isActive: boolean;
    memberId: number;
    payingMemberId: number;
    serviceId: number;
    updatedAt?: string | null;
}
export { ServiceSubscription };
