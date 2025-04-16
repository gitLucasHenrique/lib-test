export const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

export type TestType = {
    id: number;
    name: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    tags: string[];
    metadata: {
        [key: string]: any;
    }
};