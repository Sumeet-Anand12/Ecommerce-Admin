import { Navigate, Outlet } from "react-router-dom";
import DasBoardPage from "../pages/dashboard";


function PrivateRoute({ componet: componet, isAuthenticated, ...rest }) {
  // console.log(isAuthenticated)
  return isAuthenticated?<DasBoardPage/>:<Navigate to="/login" />
}
export default PrivateRoute;
