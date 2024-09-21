// index.tsx
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral, createStandardApi } from 'piral';
import { layout, errors } from './layout';
import { createDropdownPlugin } from './dropdownPlugin';

const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/my-tutorial-v1';

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors, 
  },
  plugins: [
    ...createStandardApi(),
    createDropdownPlugin(), // Register the plugin
  ],
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

const root = createRoot(document.querySelector('#app')!);
root.render(<Piral instance={instance} />);
