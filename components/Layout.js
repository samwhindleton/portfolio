// next
import Head from 'next/head';

// css
import '../styles/main.css';

// components
import Footer from './Footer';
import Navbar from './Navbar';


const Layout = (props) => (
  <div>
    <Head>
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
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous"/>
    </Head>

    <Navbar/>
    <div className="main-container">
      {props.children}
    </div>
    <Footer/>
  </div>
);

export default Layout;
