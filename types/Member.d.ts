/**
 * Member
 * A Member
 */
declare interface Member {
    id?: number;
    address: string;
    createdAt?: string | null;
    email: string;
    fatherName: string;
    firstName: string;
    joinedAt: string;
    lastName: string;
    phone: string;
    sex: string;
    updatedAt?: string | null;
}
export { Member };
