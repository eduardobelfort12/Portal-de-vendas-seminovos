import { runWithAdal } from "react-adal";
import { authContext } from "../../config/adalConfig";

export default function Login() {


  const DO_NOT_LOGIN = false;

  runWithAdal(
    authContext,
    () => {
      require("../AdminPainel");
    },
    DO_NOT_LOGIN
  );
}
