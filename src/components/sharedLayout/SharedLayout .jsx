import { Outlet } from 'react-router-dom';

import { Header } from './../../pages/index';

export const SharedLayout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      {/* <Footer></Footer> */}
    </>
  );
};
