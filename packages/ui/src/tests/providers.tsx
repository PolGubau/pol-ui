import { type RenderResult, render } from "@testing-library/react";
import { PoluiProvider, type ProviderProps } from "../providers";

export const renderWithProviders = (ui: React.ReactElement, props?: Omit<ProviderProps, "children">): RenderResult => {
  return render(<PoluiProvider {...props}>{ui}</PoluiProvider>);
};
