import "./assets/styles/index.scss";
import Login from "./pages/Login/Login";
// import Registration from "./pages/Registration/Registration";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home/Home";
import "./assets/styles/index.scss";

export const App = () => {
  return (
    <>
      <Login />
      {/* <Registration /> */}
      <Header />
      <Home />
      <Footer />
    </>
  );
};
