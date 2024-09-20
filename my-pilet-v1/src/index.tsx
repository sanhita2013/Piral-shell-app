import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'my-piral-app';

const Page = React.lazy(() => import('./Page1'));

export function setup(app: PiletApi) {
  app.registerPage('/page1', Page);

  app.showNotification('Hello from Piral v1!', {
    autoClose: 2000,
  });
  app.registerMenu(() => <>  
  <Link to="/page1">Go to Pilet v1</Link>
</>);
  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
