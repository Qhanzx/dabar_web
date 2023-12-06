import Link from "next/link";
import InstagramSidebarSlider from "../slider/InstagramSidebarSlider";
import SidePostSlider from "../slider/SidePostSlider";
import Authorside from "@/components/elements/AuthorSidebar";

export default function BlogSidebar(props) {
  const { writer } = props;
  return (
    <>
      <aside className="blog-sidebar">
        <div className="widget sidebar-widget">
          <div className="tgAbout-me">
            <div className="tgAbout-thumb">
              <img src="/assets/img/others/about_me.png" alt="me" />
            </div>
            <div className="tgAbout-info">
              <span className="designation">{writer}</span>
            </div>
            <div className="tgAbout-social">
              <Link
                href="https://www.facebook.com/profile.php?id=61552875998422&mibextid=ZbWKwL"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                href="https://twitter.com/Dabarnetwork?t=FdWs0919Lh2CqQxq50VUMg"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/darbar-media/"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </Link>
              <Link
                href="https://www.instagram.com/the.dabar/?igshid=YzAwZjE1ZTI0Zg%3D%3D"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
        </div>
        <div className="widget sidebar-widget widget_categories">
          <h4 className="widget-title text-center">Trending Category</h4>
          <ul className="list-wrap">
            <li>
              <div className="thumb">
                <Link href="/blog">
                  <img
                    src="/assets/img/category/side_category02.jpg"
                    alt="img"
                  />
                </Link>
              </div>
              <Link href="/blog">Business Insights</Link>
            </li>
            <li>
              <div className="thumb">
                <Link href="/blog">
                  <img
                    src="/assets/img/category/side_category01.jpg"
                    alt="img"
                  />
                </Link>
              </div>
              <Link href="/blog">Technology Trends</Link>
            </li>
            <li>
              <div className="thumb">
                <Link href="/blog">
                  <img
                    src="/assets/img/category/side_category09.jpg"
                    alt="img"
                  />
                </Link>
              </div>
              <Link href="/blog">Marketing & Finance</Link>
            </li>
            <li>
              <div className="thumb">
                <Link href="/blog">
                  <img
                    src="/assets/img/category/side_category04.jpg"
                    alt="img"
                  />
                </Link>
              </div>
              <Link href="/blog">Workplace & Culture</Link>
            </li>
            <li>
              <div className="thumb">
                <Link href="/blog">
                  <img
                    src="/assets/img/category/side_category06.png"
                    alt="img"
                  />
                </Link>
              </div>
              <Link href="/blog">Productivity & Innovation</Link>
            </li>
            <li>
              <div className="thumb">
                <Link href="/blog">
                  <img
                    src="/assets/img/category/side_category08.png"
                    alt="img"
                  />
                </Link>
              </div>
              <Link href="/blog">Multimedia & Events</Link>
            </li>
            <li>
              <div className="thumb">
                <Link href="/blog">
                  <img
                    src="/assets/img/category/side_category07.png"
                    alt="img"
                  />
                </Link>
              </div>
              <Link href="/blog">Opinions & Editorials</Link>
            </li>
          </ul>
        </div>
        <div className="widget sidebar-widget">
          <SidePostSlider />
        </div>
        <div className="widget sidebar-widget">
          <h4 className="widget-title text-center">Instagram Feeds</h4>
          <div className="sidebarInsta__wrap">
            <div className="sidebarInsta__top">
              <div className="sidebarInsta__logo">
                <img src="/assets/img/instagram/insta_logo.png" alt="img" />
              </div>
              <div className="sidebarInsta__info">
                <h6 className="name">
                  <Link href="#">instagram/Dabar</Link>
                </h6>
                <span className="designation">Your lens into ...</span>
              </div>
            </div>
            <div className="sidebarInsta__slider-wrap">
              <div className="swiper-container sidebarInsta-active">
                <InstagramSidebarSlider />
              </div>
              <div className="swiper-container sidebarInsta-active-2" dir="rtl">
                <InstagramSidebarSlider />
              </div>
            </div>
            <div className="sidebarInsta__bottom">
              <Link
                href="https://www.instagram.com/the.dabar/?igshid=YzAwZjE1ZTI0Zg%3D%3D"
                target="_blank"
                className="btn"
              >
                <i className="fab fa-instagram" />
                <span className="text">Follow Me</span>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
