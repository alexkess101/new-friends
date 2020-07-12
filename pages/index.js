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
               content="/https://dl.boxcloud.com/api/2.0/internal_files/690264863618/versions/732964775618/representations/png_paged_2048x2048/content/1.png?access_token=1!Hub4Csv4G7un6rtpSyp6AuFyyWuKMhFcWQ2nCsiOUajOJtx4nqSqgIxrRgpHhHhkiB5DDdZreV-zt1uxIp2FyhzztBYeC0gKJaqUJ74rv1UqwoAXhov8y-pgPmyaePtoQdIVBX0LKsCFpPxFEumZtg32cHx5QRz0QKrGZ8qXHblyBtuOKdlODNr7HyUJQO_Lbrq28Qn7jAj8CYM_7egOlqxCQAIHNNpLZX1K8RAUyJD_iKdvqqufdpi4bctknKCT1EbVZg8ChGJzcha9nhpR0HktT-mfuJa_yzO8x2zQHi_KvGdcJt_gfX_NLNY0izKIlu9U0iV0gzjipJDHP_mMOc8DgvRh-n_J8VnxMMYDmGaffwRyHPq3w-im23Ey-PdDzovofnP2BXR7J7sNOSS8wORMO9rJdNGrcntDefNqUH20GEP7705k3xhtAnLvYe0e_VJlnpoLYh7N8szdYXMbi-YFYTl_lGJgeEi5JbNleXogXsdK3VFKXbM9wfYwbBwGuxWjwEyH4LSfUmEBJRp3Zs2amJH5iIZKFIz-BDv0Qn9qzPrTRgba3MWkfy8IQEtVFR3LAiR3Aoe-twljCjCVIOh4X2Ydy8oCL_-GYNLj8LjRVtCX6XmRRYiyxhbQFnJIlEQ8QK6bPkZADn2XlyxOBrGe_Ci0xF_tnaJPavTbKDsxf5gA&box_client_name=box-content-preview&box_client_version=2.46.0"
           />
       </Head>

       <Header/>
       <AboutUs/>
       <CallToAction/>
       <Footer/>
    </div>
  )
}
