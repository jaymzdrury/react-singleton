import React from "react";
import { user } from "../singletons/Auth";

function Auth() {
  const [state, stateSet] = React.useState(user.isUser());
  return (
    <button
      onClick={() => (state ? stateSet(user.logout()) : stateSet(user.login()))}
    >
      {state ? "Logout" : "Login"}
    </button>
  );
}

export default Auth;
