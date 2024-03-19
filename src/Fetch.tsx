import React from "react";
import { get } from "../singletons/Fetch";
import { Data } from "../types";

function Fetch(): JSX.Element {
  const [users, usersSet] = React.useState<Data[]>([]);

  React.useEffect(() => {
    const f = async () => usersSet(await get.users());
    f();
  }, []);

  return <div>{users[0]?.name}</div>;
}

export default Fetch;
