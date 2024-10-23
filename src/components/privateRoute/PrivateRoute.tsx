// import { FC } from "react";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "../../pages/store/store"; // Импортируйте RootState

// interface PrivateRouteProps {
//   children: React.ReactNode;
// }

// const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
//   const isAuthenticated = useSelector(
//     (state: RootState) => state.auth.isAuthenticated
//   );

//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

// export default PrivateRoute;
