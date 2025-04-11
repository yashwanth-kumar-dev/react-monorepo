import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Inventory = React.lazy(() => import('inventory/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>Host</div>} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
