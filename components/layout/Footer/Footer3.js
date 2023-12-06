import { useState } from 'react';
import Link from 'next/link';

export default function Footer3({ footerClass, logoWhite }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your form submission logic here
    // For demonstration purposes, let's just set isSubscribed to true
    // You should replace this with your actual form submission logic
    setIsSubscribed(true);

    // Clear the email input after successful submission
    setEmail('');
  };

  return (
    <>
      <footer className={`footer-area bg-black ${footerClass}`}>
        <div className="newsletter-style-two style-three pt-80 pb-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-6 col-xl-7 col-lg-8">
                <div className="newsletter__title text-center mb-35">
                  <div className="newsletter__title-icon">
                    <i className="fas fa-envelope-open-text" />
                  </div>
                  <span className="sub-title text-white">newsletter</span>
                  <h4 className={`title  text-white`}>
                    Get notified of the best articles<br /> on Dabar
                  </h4>

                </div>
                <div className="newsletter__form-wrap text-center">
                  {isSubscribed ? (
                    <div className="success-alert">
                    <p className='text-white'>Thank you for subscribing!</p>
                  </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="newsletter__form">
                      <div className="newsletter__form-grp col-md-8">
                        <input
                          type="email"
                          placeholder="Email address"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="form-check">
                        {/* <input
                          className="form-check-input text-white"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I agree to my data is being collected
                          and stored.
                        </label> */}
                        </div>
                      </div>
                      <button className="btn" type="submit">
                        <span className="text">Subscribe</span>
                        <i className="fas fa-paper-plane" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer__logo-wrap">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4">
                <div className="footer__logo logo">
                  <Link href="/">
                    <img src="/assets/img/logo/w_logo.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="footer__social">
                  <ul className="list-wrap">
                    <li>
                      <Link
                        href="https://www.facebook.com/profile.php?id=61552875998422&mibextid=ZbWKwL"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" /> Facebook
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/the.dabar/?igshid=YzAwZjE1ZTI0Zg%3D%3D"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" /> Instagram
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://twitter.com/Dabarnetwork?t=FdWs0919Lh2CqQxq50VUMg"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" /> Twitter
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/darbar-media/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin" /> Linkedin
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright__text">
                  <p>
                    All Rights Reserved © <a>Dabar</a> -{" "}
                    {new Date().getFullYear()}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="copyright__menu">
                  <ul className="list-wrap">
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    {/* <li>
                    <a href="#" target="_blank">Privacy Policy</a>

                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

