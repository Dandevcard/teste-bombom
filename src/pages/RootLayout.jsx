import React from "react";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <header className="headerLayout" />
      <main>
        <Outlet />
      </main>
    </>
  );
}
