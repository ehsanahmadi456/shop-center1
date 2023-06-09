import { ReactNode } from 'react';
import Head from "next/head"

// Components
import Footer from "../footer";
import Navbar from "../navbar";

interface IProps {
  title: string,
  children: ReactNode | ReactNode[] | undefined
}

const Layout = ({ title, children }: IProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <title>{`${title} - Shop Center`}</title>
      </Head>
      <div className="bg-container">
        <Navbar />
        <main className="m-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout