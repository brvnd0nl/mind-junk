import { props } from "../interfaces";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout: React.FC<props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mind Junk - Portapapeles equis</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
