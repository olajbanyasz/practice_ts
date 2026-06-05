export type isString<T> = T extends string ? true : false;
export interface Person {
    id: number;
    name: string;
    email: string;
}
export type onlyNameAndEmail<T extends Person> = Pick<T, "name" | "email">;
export type Optional<T> = {
    [P in keyof T]?: T[P];
};
export declare const person: Person;
//# sourceMappingURL=typeManipulation.d.ts.map