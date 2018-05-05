import Link from 'next/link';

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link href="/resume">
          {/* utf-8 decimal reference */}
          <a>R&#233;sum&#233;</a>
        </Link>
      </li>
    </ul>

    {/* per component styling */}
    {/* <style jsx>
      {`
        ul {
          background: yellow;
        }

        ul li {
          list-style: none;
        }
      `}
    </style> */}
  </div>
);

export default Navbar;
