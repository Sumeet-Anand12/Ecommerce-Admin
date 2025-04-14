import { Navigate} from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";

function PrivateRoute({ componet: componet, isAuthenticate, ...rest }) {
 
  return isAuthenticate ?<Layout />:<Navigate to="/login" /> 
}

export default PrivateRoute;
