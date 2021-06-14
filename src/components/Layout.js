import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="pt-20" style={{ backgroundColor: "#F9F9F9" }}>
      <Navbar />
      <Head>
        <title>Client Site</title>
        <meta
          name="Home Client Site"
          content="This is hime page client site mateCommerce :)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-5xl mx-auto">
        {children}
        <div className="p-3 sm:p-8 bg-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
