import Head from 'next/head'
import Link from 'next/link'
import stylesHome from '../styles/Homepage.module.css'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import CaseStudiesWrap from '../components/CaseStudiesWrap'
import SideProjectWrap from '../components/SideProjectWrap'
import Container from '../components/Container'
import Accordion from '../components/Accordion'
import NewMedia from '../components/NewMedia'

export default function Homepage({ data }) {
  return (
    <>
    <Head>
      <title>Julio Montás - UI Developer • Full Stack Designer</title>
      <meta name='twitter:url' content='https://juliomontas.com/' />
      <meta property='og:url' content='https://juliomontas.com/' />
      <meta property='og:image' content='https://juliomontas.com/me.png' />
      <meta name='twitter:image' content='https://juliomontas.com/me.png' />
      <meta property='og:title' content='Julio montas - UI Developer • Full Stack Designer' />
      <meta name='twitter d:title' content='Julio montas - UI Developer • Full Stack Designer' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <link rel="canonical" href="https://juliomontas.com/" />
      <link rel="alternate" href="https://juliomontas.com/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/" hreflang="es-us" />
    </Head>
      <div className={stylesHome.main}>
      <NavBar />
      <Container>

        <HeroSection
          title="Envision a project that grows with you"
          description="Digital designer for apps, marketing websites, eCommerce shops and augmented reality to create memorable product that Increase engagement for your entrepreneur goals on the road to a visual solution."
        />
        
        <div className={stylesHome.spacePadding}>
          <CaseStudiesWrap
            title="Case Studies"
          />
        </div>

        {/* Services One: Headless CMS for [Marketing, Musians, Entrepreneur, Shops] that wants to modify or extend the website template back and forth to reduce engineering help. */}
        {/*  https://www.netlify.com/resources/webinars/modular-web-design/ */}
        <div className={stylesHome.spacePadding}>
          <h2 className={stylesHome.mobileHtwo}>
            Services
          </h2>
          <Accordion
            title="🌱 Sculpting Your Vision"
            quote="Digital Designer"
            contUnoTitle="Digital Designer"
            contUno="Multi-disciplinary designer that care deeply about the users who use the product. Using user-centered design methods to craft industry-leading user experiences from concept to execution."
            contDosTitle="User Experience Design"
            contDos="Pleasing the eye for legibility and capture inspiration."
            logoUno="figma"
            logoDos="css"
            logoTres="invision"
            logoFour="google"
            logoFive="sketch"
            logoSix="jira"
            imgsrc=""
            imgalt=""
          />
          <Accordion
            title="🍭 From Visual To Develoment"
            quote="Web and Mobile Development"
            contUnoTitle="Web and Mobile Development"
            contUno="Expert level knowledge of HTML/CSS and JavaScript with hands on experience with Node.js, ReactJS cross-platform development and other component-based framework."
            contDosTitle="eCommerce"
            contDos="Building custom online experience combine with 5 year of retail store experience."
            logoUno="nextjs"
            logoDos="pwa"
            logoTres="gatsbyjs"
            logoFour="github"
            logoFive="shopify"
            logoSix="docker"
            imgsrc=""
            imgalt=""
          />
          <Accordion
            title="🚀 Experimental"
            quote="Creative Technologist"
            contUnoTitle="Creative Technologist"
            contUno="Comfortable conceptually and technically with a variety of devices, from mobile to wearable to VR and AR, communication through code."
            contDosTitle="Prototype"
            contDos="VR / AR experience"
            logoUno="terminal"
            logoDos="linux"
            logoTres="raspberrypi"
            logoFour="mongodb"
            logoFive="webxr"
            logoSix="p5js"
            imgsrc=""
            imgalt=""
          />
          <h2 className={stylesHome.mobileHtwo}>
            <Link href={`https://forms.gle/9uVudBpW7YE6n2CNA`}>
              <a>Let's Talk</a>
            </Link>
          </h2>
        </div>
        
        <div className={stylesHome.spacePadding}>
          <SideProjectWrap 
            title="Side Project"
          />
        </div>
        
        {/* <div className={stylesHome.spacePadding}>
          <h2 className={stylesHome.mobileHtwo}>
            <NewMedia
              title="New Media"
             />
          </h2>
        </div> */}

        <div className={stylesHome.spacePadding}>
          <h2 className={stylesHome.mobileHtwo}>
            Contact
          </h2>
          <Link href={`/about-me`}>
              <a className={stylesHome.mobileHtwo}>About Me</a>
            </Link>
        </div>

        {/* <div className={stylesHome.spacePadding}>
          <BlogSection 
           title="Blog"
           />
        </div> */}
        
        <div className={stylesHome.spacePadding}>
          <p className={stylesHome.mobileHtwo}>
            © {new Date().getFullYear()} Julio Montás. All Rights Reserved.
          </p>
        </div>

      </Container>
      </div>
    </>
  );
}
