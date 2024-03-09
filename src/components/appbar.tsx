import { auth, signIn, signOut } from "../auth";
import Link from "next/link";
import React from "react";
import Header from "./header";
import NavItem from "./navItem";
import Button from "./button";
async function AppBar() {
  const session = await auth();

  return (
    <div className="p-2 bg-gradient-to-b from-slate-800 to-slate-600 flex gap-6 text-white">
      <NavItem href={"/clientPage"} title={"clientPage"} />
      <NavItem href={"/serverPage"} title={"serverPage"} />
      <NavItem href={"/middlewareProtected"} title={"middlewareProtected"} />
      <div className="ml-auto flex pr-3 pt-2">
        {" "}
        {session && session.user ? (
          <div className="flex gap-2 ">
            <p>{session.user.name}</p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button type="submit" title="SignOut" />
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <Button type="submit" title="SignIn" />
          </form>
        )}{" "}
      </div>{" "}
      <Header />
    </div>
  );
}

export default AppBar;
