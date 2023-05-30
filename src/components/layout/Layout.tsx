import * as React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`flex h-screen flex-col justify-between bg-neutral-50 `}>
      <Navbar />
      <main role='main' className='relative p-5 my-5 flex-auto'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
