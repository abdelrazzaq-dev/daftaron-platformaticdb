/**
 * ServiceSubscription
 * A ServiceSubscription
 */
declare interface ServiceSubscription {
    id?: number;
    createdAt: string;
    isActive: boolean;
    memberId: number;
    payingMemberId: number;
    serviceId: number;
    updatedAt: string;
}
export { ServiceSubscription };
