export type isString<T> = T extends string ? true : false;
type Optional<T> = {
    [P in keyof T]?: T[P];
};
export interface User {
    id: number;
    name: string;
    email: string;
}
export type OptionalUser = Optional<User>;
export declare const user: OptionalUser;
export {};
//# sourceMappingURL=typeManipulation.d.ts.map