import React, { useCallback } from 'react';
import useSidebar from '../../hooks/useSidebar';
import ResponsiveNav from '../Header/ResponsiveNav';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = () => {
  const { isOpenSidebar, toggleSidebar, closeSidebar, ref } = useSidebar();

  const memoizedToggleSidebar = useCallback(() => {
    toggleSidebar();
  }, [toggleSidebar]);

  const memoizedCloseSidebar = useCallback(() => {
    closeSidebar();
  }, [closeSidebar]);

  return (
    <div>
      <ResponsiveNav
        closeSidebar={memoizedCloseSidebar}
        isOpenSidebar={isOpenSidebar}
        ref={ref}
      />
      <Header toggleSidebar={memoizedToggleSidebar} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
