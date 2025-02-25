import { type ClassValue, clsx } from "../cn/clsx";
import type { ClassProp, OmitUndefined, StringToBoolean } from "./types";

export type VariantProps<Component extends (...args: never) => unknown> = Omit<
  OmitUndefined<Parameters<Component>[0]>,
  "class" | "className"
>;

const falsyToString = <T>(value: T) => {
  if (typeof value === "boolean") {
    return `${value}`;
  }
  if (value === 0) {
    return "0";
  }
  return value;

  // (typeof value === 'boolean' ? `${value}` : value === 0 ? '0' : value)
};

/* cx
  ============================================ */

export type CxOptions = Parameters<typeof clsx>;
export type CxReturn = ReturnType<typeof clsx>;

/* cva
  ============================================ */

type ConfigSchema = Record<string, Record<string, ClassValue>>;

type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined;
};
type ConfigVariantsMulti<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | StringToBoolean<keyof T[Variant]>[] | undefined;
};

type Config<T> = T extends ConfigSchema
  ? {
      variants?: T;
      defaultVariants?: ConfigVariants<T>;
      compoundVariants?: (T extends ConfigSchema
        ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp
        : ClassProp)[];
    }
  : never;

type Props<T> = T extends ConfigSchema ? ConfigVariants<T> & ClassProp : ClassProp;

export const cva =
  <T>(base?: ClassValue, config?: Config<T>) =>
  (props?: Props<T>) => {
    if (config?.variants == null) {
      return clsx(base, props?.class, props?.className);
    }

    const { variants, defaultVariants } = config;

    const getVariantClassNames = Object.keys(variants).map((variant: keyof typeof variants) => {
      const variantProp = props?.[variant as keyof typeof props];
      const defaultVariantProp = defaultVariants?.[variant];

      if (variantProp === null) {
        return null;
      }

      const variantKey = (falsyToString(variantProp) ??
        falsyToString(defaultVariantProp)) as keyof (typeof variants)[typeof variant];

      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const selectedVariant = variants[variant] as any;
      const selectedVariantValue = selectedVariant[variantKey];
      return selectedVariantValue;
    });

    const propsWithoutUndefined =
      props &&
      Object.entries(props).reduce<Record<string, unknown>>((acc, [key, value]) => {
        if (value === undefined) {
          return acc;
        }

        acc[key] = value;
        return acc;
      }, {});

    const getCompoundVariantClassNames = config.compoundVariants?.reduce(
      (acc, { class: cvClass, className: cvClassName, ...compoundVariantOptions }) =>
        Object.entries(compoundVariantOptions).every(([key, value]) =>
          Array.isArray(value)
            ? value.includes(
                {
                  ...defaultVariants,
                  ...propsWithoutUndefined,
                }[key],
              )
            : {
                ...defaultVariants,
                ...propsWithoutUndefined,
              }[key] === value,
        )
          ? [...acc, cvClass, cvClassName]
          : acc,
      [] as ClassValue[],
    );

    return clsx(base, getVariantClassNames, getCompoundVariantClassNames, props?.class, props?.className);
  };
