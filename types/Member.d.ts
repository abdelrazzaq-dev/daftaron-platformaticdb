/**
 * Member
 * A Member
 */
declare interface Member {
    id?: number;
    firstName: string;
    lastName: string;
    fatherName: string;
    idNumber: string;
    phone: string;
    email: string;
    mainAddress: string;
    joinedAt?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
}

export { Member };
