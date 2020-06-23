import Head from "next/head"
import Header from "../components/Header.js"
import AboutUs from "../components/AboutUs.js";

export default function Home() {
  return (
   <div>
       <Head>
           <title>Creating friends from scratch</title>
       </Head>

       <Header/>
       <AboutUs/>

    </div>
  )
}
