import { Photo } from "./photo";

export interface appUser {
        id: number;
        username: string;
        photoUrl: string;
        age: number;
        createdOn: Date;
        lastActive: Date;
        mobile: string;
        email: string;
        gender: string;
        designation: string;
        city: string;
        country: string;
        photos: Photo[];
    }