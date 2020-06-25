import Head from "next/head"
import Header from "../components/Header.js"
import AboutUs from "../components/AboutUs.js";
import Footer from "../components/Footer.js";
import CallToAction from "../components/CallToAction.js";

export default function Home() {
  return (
   <div>
       <Head>
           <title>Creating friends from scratch</title>
       </Head>

       <Header/>
       <AboutUs/>
       <CallToAction/>
       <Footer/>
       {/*<iframe*/}
       {/*    src="https://docs.google.com/forms/d/e/1FAIpQLScqYjofIp2pzvkYQrAqbIQNDxiUCQFon-LtF26uhzjSlM-pig/viewform?embedded=true"*/}
       {/*    width="640" height="844" frameBorder="0" marginHeight="0" marginWidth="0">Loading…*/}
       {/*</iframe>*/}

    </div>
  )
}
