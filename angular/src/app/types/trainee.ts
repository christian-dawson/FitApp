import { Goal } from './goal';
export class Trainee {
    id: number;
    trainerId: number;
    requestedId: number;
    height: number;
    weight: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    birthdate: string;
    goal: Goal;
}
