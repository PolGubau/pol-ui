import React from "react";

export interface ForProps<Item> {
  /**
   * The list of items to iterate over and render.
   */
  items: Item[];
  error?: (error: Error, item: Item, index: number) => JSX.Element;
  render: (item: Item) => JSX.Element;
  empty?: () => JSX.Element;
}

/**
 * A generic component that iterates over a list of items and renders them using a provided render function.
 * It also supports rendering a fallback component when the list is empty and handling errors during rendering.
 *
 * @template Item - The type of the items in the list.
 * @param {ForProps<Item>} props - The properties for the For component.
 * @param {Item[]} props.items - The list of items to iterate over and render.
 * @param {() => React.ReactNode} [props.empty] - An optional function that returns a React node to render when the list is empty.
 * @param {(item: Item) => React.ReactNode} props.render - A function that returns a React node for a given item.
 * @param {(error: Error, item: Item) => React.ReactNode} [props.error] - An optional function that returns a React node to render when an error occurs during rendering.
 *
 * @returns {JSX.Element} A React element that renders the list of items or the fallback/error components.
 */
export const For = <Item,>(props: ForProps<Item>) => {
  return (
    <>
      {props.items.length === 0 && props.empty && props.empty()}
      {props.items.map((item, index) => {
        try {
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          return <React.Fragment key={index}>{props.render(item)}</React.Fragment>;
        } catch (error) {
          if (props.error) {
            if (error instanceof Error) {
              return props.error(error, item, index);
            }
          }
          throw error;
        }
      })}
    </>
  );
};
