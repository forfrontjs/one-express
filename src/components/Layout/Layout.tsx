import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}


