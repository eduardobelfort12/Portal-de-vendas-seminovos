import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import { authContext } from "../../config/adalConfig";

export default function Logout() {
  return (
    <div>
      <Button
        startIcon={<ExitToAppIcon />}
        onClick={() => authContext.logOut()}
      />
    </div>
  );
}
