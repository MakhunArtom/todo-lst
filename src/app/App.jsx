import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './../components/index';

import { Home } from './../pages/index';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<h1>Love</h1>} />
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
