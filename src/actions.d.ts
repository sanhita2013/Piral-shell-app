// actions.d.ts
import { GlobalStateContext, PiralAction } from 'piral-core';

declare module 'piral-core/lib/types/custom' {
  interface PiralCustomActions {
    setSelectedOption: (ctx: GlobalStateContext, selectedOption: string) => void;
  }
}
