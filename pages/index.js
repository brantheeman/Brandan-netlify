import Head from 'next/head'
import Navbar from "../components/Navbar";
import heroPage  from "./heroPage";
import Clients from "./clients";
import Services from "./services";
import News from "./news";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brandan Pratt</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <heroPage/>
      <Clients />
      <Services />
      <News />
      <Contact />
      <Footer />      
    </div>
  )
}
