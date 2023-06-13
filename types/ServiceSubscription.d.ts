/**
 * ServiceSubscription
 * A ServiceSubscription
 */
declare interface ServiceSubscription {
    id?: number;
    memberId: number;
    payingMemberId: number;
    serviceId: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
export { ServiceSubscription };
