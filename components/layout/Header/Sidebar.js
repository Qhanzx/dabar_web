import Link from "next/link";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Sidebar({ handleSidebarClose }) {
  return (
    <>
      <div className="offCanvas__wrap">
        <div className="offCanvas__body">
          <div className="offCanvas__toggle" onClick={handleSidebarClose}>
          <IoClose />
          </div>
          <div className="offCanvas__content">
            <div className="offCanvas__logo logo">
              <Link href="/" className="logo-dark">
                <img src="/assets/img/logo/logo.png" alt="Logo" />
              </Link>
              <Link href="/" className="logo-light">
                <img src="/assets/img/logo/w_logo.png" alt="Logo" />
              </Link>
            </div>
            <h4 className="title">About Us</h4>
            <p>
              Welcome to Dabar Media – where business, technology, and workplace
              culture converge to tell compelling stories. "Dabar," meaning
              'word' or 'talk' in Hebrew, symbolizes our commitment to bringing
              powerful narratives to the forefront. Our name reflects our
              mission to uncover and narrate stories that shape the dynamic
              sectors of business and technology. Join us as we delve into the
              world of innovative businesses, cutting-edge technology, and
              evolving workplace trends, offering insights and perspectives that
              resonate in today's fast-paced world.
            </p>
          </div>
          <div className="offCanvas__contact">
            <h4 className="title">Get In Touch</h4>
            <ul className="offCanvas__contact-list list-wrap">
              <li>
                <i className="fas fa-envelope-open" />
                <Link href="mailto:hello@thedabar.com" target="_blank">
                  hello@thedabar.com
                </Link>
              </li>
              <li>
                <FaInstagram />
                <Link
                  href="https://www.instagram.com/the.dabar/?igshid=YzAwZjE1ZTI0Zg%3D%3D"
                  target="_blank"
                >
                  Where visuals meet visionary content
                </Link>
              </li>
              <li>
                <FaFacebookSquare />
                <Link
                  href="https://www.facebook.com/profile.php?id=61552875998422&mibextid=ZbWKwL"
                  target="_blank"
                >
                  For updates and community interactions
                </Link>
              </li>
              <li>
                <RiTwitterXFill />
                <Link
                  href="https://twitter.com/Dabarnetwork?t=FdWs0919Lh2CqQxq50VUMg"
                  target="_blank"
                >
                  Let’s tweet the talk
                </Link>
              </li>
              <li>
                <FaLinkedin />
                <Link
                  href="https://www.linkedin.com/company/darbar-media/"
                  target="_blank"
                >
                  Connect with us professionally
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="offCanvas__overlay" onClick={handleSidebarClose} />
    </>
  );
}
