import type { NextPage } from "next";
import Header from "./component/header";
import About from "./component/About";
import Head from "next/head";
import Contact from "./component/contact";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Integenal</title>
        <meta name="description" content="Integenal generated" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </Head>
      <div className="">
        <Header></Header>
        <About></About>
        <Contact></Contact>
      </div>
    </div>
  );
};
export default Home;
