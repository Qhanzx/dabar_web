import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <Layout breadcrumbCategory="Contact us">
        <div className="hero-section about gap mt-20 mb-4">
          <div className="container col-lg-6">
            <div className="row align-items-center justify-content-center">
              <div
                className="col text-center "
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={300}
              >
                <div className="about-text text-black">
                  <h2>We're All Ears at Dabar Media!</h2>
                  <p>
                  Got a burning question? A brilliant idea? Or maybe a story that just can't wait? We're here for it all! Drop us a line, and let's start a conversation that could spark a change. At Dabar Media, every voice matters, and yours is no exception.
                  </p>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="address">
                      <MdAlternateEmail style={{ fontSize:"xx-large" }}/>
                      <a href="mailto:hello@thedabar.com">
                        <h6>Connect with Us:</h6>
                      </a>
                      <span>Whether it’s feedback, queries, or your latest brainwave, our inbox is always open.
</span>
                      <a href="mailto:quick.info@mail.net">
                        <h6>hello@thedabar.com</h6>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="address">
                      <FaFacebook style={{ fontSize:"xx-large" }}/>
                      <a href="https://www.facebook.com/profile.php?id=61552875998422&mibextid=ZbWKwL"
                      target="_blank"
                      >
                        <h6>Facebook/Dabar</h6>
                      </a>
                      <span>Stay in the loop and be part of our ever-growing community.</span>
                      
                      <span>Follow us on facebook</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="address">
                      <FaInstagramSquare
                       style={{ fontSize:"xx-large" }}
                      />
                      <a href="https://www.instagram.com/the.dabar/?igshid=YzAwZjE1ZTI0Zg%3D%3D"
                        target="_blank">
                        <h6>Instagram.com/the.dabar</h6>
                      </a>
                      <span>Where visuals meet visionary content</span>
                      <span>Follow us on instagram</span>
                
                    </div>
                  </div>
                  
                  <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="address">
                      <FaFacebook style={{ fontSize:"xx-large" }}/>
                      <a href="mailto:quick.info@mail.net">
                        <h6>Connect with Us:</h6>
                      </a>
                      <span>Lorem ipsum dolor sit.</span>
                      <a href="mailto:quick.info@mail.net">
                        <h6>quick.info@mail.net</h6>
                      </a>
                      <span>Dolore magna aliqua</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="address">
                      <FaLinkedin style={{ fontSize:"xx-large" }}/>
                      <a href="https://www.linkedin.com/company/darbar-media/"
                        target="_blank">
                        <h6>quick.info@mail.net</h6>
                      </a>
                      <span> Connect with us professionally.</span>
                      
                      <span>Dolore magna aliqua</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="address">
                      <FaInstagramSquare
                       style={{ fontSize:"xx-large" }}
                      />
                      <a href="callto:+14253261627">
                        <h6>+1 425 326 16 27</h6>
                      </a>
                      <span>Et netus et malesuada</span>
                      <a href="callto:+14253261627">
                        <h6>+1 425 326 16 27</h6>
                      </a>
                      <span>Enim tortor auctor urna</span>
                    </div>
                  </div>
                  </div>
                
            
                </div>
              </div>
            </div>
          </div>
       </div>
      </Layout>
    </>
  );
}
