import Head from "next/head"
import Header from "../components/Header.js"
import AboutUs from "../components/AboutUs.js";
import Footer from "../components/Footer.js";
import CallToAction from "../components/CallToAction.js";

export default function Home() {
  return (
   <div>
       <Head>
           <title>Do Something Fun</title>
           <script async src="https://www.googletagmanager.com/gtag/js?id=UA-171722391-1"></script>
           <meta name="author" content="Alex Kessinger"/>
           <meta charSet="UTF-8"/>
           <meta
               property="og:image"
               content="/img/meta-tag-image.png"
           />
       </Head>

       <Header/>
       <AboutUs/>
       <CallToAction/>
       <Footer/>
    </div>
  )
}
