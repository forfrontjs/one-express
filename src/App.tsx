import "./assets/styles/index.scss";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Admin } from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import { Profile } from "./pages/Profile/Profile";
import Registration from "./pages/Registration/Registration";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
};
