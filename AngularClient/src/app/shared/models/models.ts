export interface User {
    id: number;
    name: string;
    email: string;
    userName: string;
    // books: Book[];
}

export interface Book {
    id: number;
    name: string;
    userId: number;
    user: User | null;
}