import React from "react";
import { auth, signIn, signOut } from "../../../auth";
async function Page() {
  await signIn();
  return <div>login</div>;
}
export default Page;
