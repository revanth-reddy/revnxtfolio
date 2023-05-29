import Head from 'next/head';
import { SSRProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <SSRProvider>
      <div>
        <Head>
          <title>RevFolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="App">
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Contact />
          {/* <Footer /> */}
        </div>
      </div>
    </SSRProvider>
  )
}
