import Head from 'next/head';
import '../styles/main.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
  <div>
    <Head>
      <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>

      {/* character encoding */}
      <meta charSet="utf-8"/>
      {/* viewport for page dimensions and scaling */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      {/* author */}
      <meta name="author" content="Sam Whindleton"/>
      {/* description */}
      <meta name="description" content="I'm a Full Stack Web Developer and busy bee that loves creating scripts that complete multiple tasks in less time than it takes to take a sip of coffee. Constantly looking for efficient ways to solve problems, and opportunities to learn and grow. Let's ./start.sh something new."/>
      {/* favicon */}
      <link rel="icon" href="static/favicon/favicon.ico" type="image/x-icon"/>
      {/* keywords */}
      <meta name="keywords" content="sam whindleton, samantha whindleton, whindleton, back end developer, front end developer, full stack developer, web developer, developer portfolio, developer resume"/>
      {/* title */}
      <title>Sam Whindleton | Full Stack Web Developer</title>
      {/* main css */}
      <link rel="stylesheet" href="/_next/static/style.css"/>
      {/* font awesome */}
      <script defer src="https://use.fontawesome.com/releases/v5.0.12/js/all.js" integrity="sha384-Voup2lBiiyZYkRto2XWqbzxHXwzcm4A5RfdfG6466bu5LqjwwrjXCMBQBLMWh7qR" crossOrigin="anonymous"></script>
    </Head>
    <Navbar/>
    <div className="main-container">
      {props.children}
    </div>
    <Footer/>
  </div>
);

export default Layout;
