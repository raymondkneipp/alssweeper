import { Banner, Cart, Footer, NavBar, Typography } from "@components";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Cart />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
