// dropdownPlugin.ts
import { PiralPlugin, GlobalStateContext } from 'piral-core';

export function createDropdownPlugin(): PiralPlugin {
  return (context: GlobalStateContext) => {
    context.defineActions({
      setSelectedOption(ctx, selectedOption) {
        ctx.dispatch((state) => ({
          ...state,
          selectedOption,
        }));
      },
    });

    return {}; // Return an empty object to satisfy the return type requirement
  };
}
