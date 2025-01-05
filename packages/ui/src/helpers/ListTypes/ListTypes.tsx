/**
 * @name ListTypes
 * @description ListTypes is a generic type that takes an object and returns a list of types
 *
 * @param {T} T
 * @returns {ListTypes<T>}
 * @example <caption>Example usage of ListTypes</caption>
 * import { ListTypes } from "@pol-ui";
 *  * type Example = {
 * name: string;
 * age: number;
 * };
 * type ExampleList = ListTypes<Example>;
 * // ExampleList = {
 * //  name: string;
 * //  age: number;
 * // }
 *
 */
export type ListTypes<T> = {
	[K in keyof T]: T[K];
};
