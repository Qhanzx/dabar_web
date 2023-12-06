import Layout from "@/components/layout/Layout";
import TrendingSlider from "@/components/slider/TrendingSlider";
import data from "@/util/blogData";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import ModalVideo from "react-modal-video";
import { createClient } from "contentful";

export default function Home1() {
  const [isOpen, setOpen] = useState(false);
  const [Herodata, setHerodata] = useState([]);
  const [featured, setfeatured] = useState([]);
  const [popular, setPopular] = useState([]);
  const client = createClient({
    space: "t0pszie0jiqu",
    accessToken: "bm2qgxL1ruXxTPkEQT0KgtAuHOwVxlOzOuj-AoNo-AM",
  });

  useEffect(() => {
    const HeroAPi = async () => {
      // Hero Stories
      let top = await client.getEntries({
        content_type: "topstories",
        select: "fields",
      });
      // top?.items

      const newData = await Promise.all(
        top?.items.map(async (item) => {
          // console.log(item.fields.storyId.fields.preSummary)
          let timez = new Date(item.fields.storyId.sys.createdAt);
          const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ];
          const day = timez.getDate();
          const monthIndex = timez.getMonth();
          const year = timez.getFullYear();
          const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
          let getid = await client.getEntry(item.sys.id);
          let data = await client.getEntry(
            item.fields.storyId.fields.categoryId.sys.id
          );
          let writer = await client.getEntry(
            item.fields.storyId.fields.writerId.sys.id
          );
          let answer = data.fields.category;
          return {
            heading: item.fields.storyId.fields.heading,
            // summary: item.fields.storyId.fields.summary,
            summary: item.fields.storyId.fields.preSummary,
            thumbnail: item.fields.storyId.fields.thumbnail.fields.file.url,
            subcategories: answer,
            id: getid.sys.id,
            writername: writer.fields.name,
            timez: formattedDate,
          };
        })
      );

      const shuffledArray = newData.slice().sort(() => Math.random() - 0.5);
      let arrx = shuffledArray.slice(0, 4);

      setHerodata(arrx);
    };

    HeroAPi();

    const Feature = async () => {
      let features = await client.getEntries({
        content_type: "feature",
        select: "fields",
      });

      const newData = await Promise.all(
        features?.items.map(async (item) => {
          let timez = new Date(item.fields.storyId.sys.createdAt);
          const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ];
          const day = timez.getDate();
          const monthIndex = timez.getMonth();
          const year = timez.getFullYear();
          const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
          // console.log(item.fields.storyId.fields.thumbnail.fields.file.url)
          // console.log(item.fields.storyId.fields.categoryId.sys.id)
          let data = await client.getEntry(
            item.fields.storyId.fields.categoryId.sys.id
          );
          let writer = await client.getEntry(
            item.fields.storyId.fields.writerId.sys.id
          );
          let getid = await client.getEntry(item.sys.id);
          //  console.log(data)
          let answer = data.fields.category;

          return {
            heading: item.fields.storyId.fields.heading,
            //  summary: item.fields.storyId.fields.summary,
            summary: item.fields.storyId.fields.preSummary,
            category: answer,
            thumbnail: item.fields.storyId.fields.thumbnail.fields.file.url,
            writername: writer.fields.name,
            timez: formattedDate,
            id: getid.sys.id,
          };
        })
      );
      setfeatured(newData);
    };

    Feature();

    const Popular = async () => {
      let popularstories = await client.getEntries({
        content_type: "popularstories",
        select: "fields",
      });
      const newData = await Promise.all(
        popularstories?.items.map(async (item) => {
          let timez = new Date(item.fields.storyId.sys.createdAt);
          const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ];
          const day = timez.getDate();
          const monthIndex = timez.getMonth();
          const year = timez.getFullYear();
          const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
          // console.log(item.fields.storyId.fields.thumbnail.fields.file.url)
          // console.log(item.fields.storyId.fields.categoryId.sys.id)
          let data = await client.getEntry(
            item.fields.storyId.fields.categoryId.sys.id
          );
          let writer = await client.getEntry(
            item.fields.storyId.fields.writerId.sys.id
          );
          let getid = await client.getEntry(item.sys.id);
          //  console.log(data)
          let answer = data.fields.category;

          return {
            heading: item.fields.storyId.fields.heading,
            //  summary: item.fields.storyId.fields.summary,
            summary: item.fields.storyId.fields.preSummary,
            category: answer,
            thumbnail: item.fields.storyId.fields.thumbnail.fields.file.url,
            writername: writer.fields.name,
            timez: formattedDate,
            id: getid.sys.id,
          };
        })
      );

      setPopular(newData);
    };

    Popular();

    const Local = async () => {
      let story = await client.getEntries({
        content_type: "currentstories",
        select: "fields",
      });
      const newData = await Promise.all(
        story?.items.map(async (item) => {
          let timez = new Date(item.fields.storyId.sys.createdAt);
          const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ];
          const day = timez.getDate();
          const monthIndex = timez.getMonth();
          const year = timez.getFullYear();
          const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

          let data = await client.getEntry(
            item.fields.storyId.fields.categoryId.sys.id
          );
          let writer = await client.getEntry(
            item.fields.storyId.fields.writerId.sys.id
          );
          let answer = data.fields.category;
          let answriter = writer.fields.name;
          return {
            heading: item.fields.storyId.fields.heading,
            summary: item.fields.storyId.fields.summary,
            presummary: item.fields.storyId.fields.preSummary,
            thumbnail: item.fields.storyId.fields.thumbnail.fields.file.url,
            category: answer,
            writer: answriter,
            id: item.sys.id,
            timez: formattedDate,
          };
        })
      );
      localStorage.setItem("stories", JSON.stringify(newData));
    };
    Local();
  }, []);
  return (
    <>
      <Layout headerStyle={6} footerStyle={3} footerClass="black-bg" logoWhite>
        <div className="slider__marquee clearfix">
          <div className="marquee_mode">
            <Marquee className="js-marquee" pauseOnHover={true}>
              <h6 className="item">
                BTC $20211.23 <span>+1.07%</span>
              </h6>
              <h6 className="item">
                eth $1533.56 <span>+3.12%</span>
              </h6>
              <h6 className="item">
                bnb $281.43 <span>+0.02%</span>
              </h6>
              <h6 className="item">
                busd $1.00 <span>+0.01%</span>
              </h6>
              <h6 className="item minus">
                xrp $0.33 <span>-2.62%</span>
              </h6>
              <h6 className="item">
                ada $0.45 <span>+0.16%</span>
              </h6>
              <h6 className="item minus">
                sol $31.54 <span>-1.14%</span>
              </h6>
            </Marquee>
          </div>
        </div>
        <section className="tgbanner__area-five pt-20 pb-30">
          <div className="container">
            <div className="row row--10">
              {Herodata && Herodata.length > 0 ? (
                <div className="col-lg-12 col-xl-6 col-md-12 col-12 mt--20 ">
                  <div className="tgbanner__five-item big-post">
                    <div className="tgbanner__five-thumb tgImage__hover   ">
                      <Link href={`/blog/${Herodata[0].id}`}>
                        <img src={Herodata[0].thumbnail} alt="img" />
                      </Link>
                    </div>
                    <div className="tgbanner__five-content">
                      <Link
                        href={`/business?hello=${encodeURIComponent(
                          Herodata[0].subcategories
                        )}`}
                        className="tags text-orange text-uppercase fw-bold"
                      >
                        {Herodata[0].subcategories}
                      </Link>
                      <h2 className="title tgcommon__hover mt-4 mb-4">
                        <Link href={`/blog/${Herodata[0].id}`}>
                          {Herodata[0].heading}
                        </Link>
                        <p className="custom-paragraph-style text-white">
                          {Herodata[0].summary == undefined ||
                          Herodata[0].summary == null
                            ? ""
                            : Herodata[0].summary.length > 100
                            ? Herodata[0].summary.substr(0, 150) + "..."
                            : Herodata[0].summary}
                        </p>
                      </h2>

                      <ul className="tgbanner__content-meta list-wrap">
                        <li>
                          <Link href={`/blog/${Herodata[0].id}`}>
                          {Herodata[1].writername}
                          </Link>
                        </li>
                        <li>{Herodata[1].timez}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="col-lg-12 col-xl-6 col-md-12 col-12 mt_lg--20 mt_md--20 mt_sm--20">
                {Herodata && Herodata.length > 0 ? (
                  <div className="tgbanner__five-item small-post">
                    <div className="tgbanner__five-thumb tgImage__hover   ">
                      <Link href={`/blog/${Herodata[1].id}`}>
                        <img src={Herodata[1].thumbnail} alt="img" />
                      </Link>
                    </div>
                    <div className="tgbanner__five-content">
                      <Link
                        href={`/business?hello=${encodeURIComponent(
                          Herodata[1].subcategories
                        )}`}
                        className="tags text-orange text-uppercase fw-bold "
                      >
                        {Herodata[1].subcategories}
                      </Link>
                      <h2 className="title tgcommon__hover mt-2 mb-1">
                        <Link href={`/blog/${Herodata[1].id}`}>
                          {Herodata[1].heading}
                        </Link>
                      </h2>
                      <ul className="tgbanner__content-meta list-wrap">
                        <li>
                          <Link href={`/blog/${Herodata[1].id}`}>
                            {Herodata[1].writername}
                          </Link>
                        </li>
                        <li>{Herodata[1].timez}</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="row row--10">
                  {Herodata.slice(2, 4)?.map((item) => {
                    return (
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--20">
                        <div className="tgbanner__five-item small-post">
                          <div className="tgbanner__five-thumb tgImage__hover   ">
                            <Link href="/blog/101">
                              <img src={item.thumbnail} alt="img" />
                            </Link>
                          </div>
                          <div className="tgbanner__five-content">
                            <Link
                              href={`/business?hello=${encodeURIComponent(
                                item.subcategories
                              )}`}
                              className="tags text-orange text-uppercase fw-bold"
                            >
                              {item.subcategories}
                            </Link>
                            <h2 className="title tgcommon__hover mt-2 mb-2">
                              <Link href={`/blog/${item.id}`}>
                                {item.heading}
                              </Link>
                            </h2>
                            <ul className="tgbanner__content-meta list-wrap">
                              <li>
                                <Link href={`/blog/${item.id}`}>
                                  {item.writername}
                                </Link>
                              </li>
                              <li>{item.timez}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trending-post-area section__hover-line pt-25">
          <div className="container">
            <div className="section__title-wrap mb-40">
              <div className="row align-items-end">
                <div className="col-sm-6">
                  <div className="section__title">
                    <span className="section__sub-title">Popular Posts</span>
                    <h3 className="section__main-title">Trending News</h3>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="section__read-more text-start text-sm-end">
                    <Link href="/blog">
                      More Post <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="trending__slider">
              <div className="swiper-container trending-active">
                <TrendingSlider showItem={4} />
              </div>
            </div>
          </div>
        </section>
        <div className="advertisement pt-45 pb-10">
          <div className="container">
            <div className="col-12">
              <div className="advertisement__image text-center">
                <Link href="/#">
                  <img
                    src="/assets/img/others/advertisement.png"
                    alt="advertisement"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="featured-post-area section__hover-line pt-75">
          <div className="container">
            <div className="section__title-wrap mb-40">
              <div className="row align-items-end">
                <div className="col-sm-6">
                  <div className="section__title">
                    <span className="section__sub-title">Featured</span>
                    <h3 className="section__main-title">Editor Choice</h3>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="section__read-more text-start text-sm-end">
                    <Link href="/blog">
                      More Featured Post{" "}
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {featured.length > 0
                ? featured.map((item, i) => (
                    <div className="col-lg-4 col-sm-6" key={i}>
                      <div className="featured__post">
                        <div
                          className="featured__thumb"
                          style={{
                            backgroundImage: `url(${item.thumbnail})`,
                          }}
                        >
                          {/* 0{item.id} */}
                        </div>
                        <div className="featured__content">
                          <ul className="tgbanner__content-meta list-wrap">
                            <li className="category">
                              <Link
                                href={`/business?hello=${encodeURIComponent(
                                  item.category
                                )}`}
                              >
                                {item.category}
                              </Link>
                            </li>
                           
                            
                          </ul>
                          <ul className="tgbanner__content-meta list-wrap"><li className="text-black"><Link href={`/blog/${item.id}`}>By {item.writername}</Link></li></ul>
                          <h4 className="title tgcommon__hover">
                            <Link href={`/blog/${item.id}`}>
                              {item.heading}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))
                : []}
            </div>
          </div>
        </section>
        <div className="advertisement pt-45 pb-10">
          <div className="container">
            <div className="col-12">
              <div className="advertisement__image text-center">
                <Link href="/#">
                  <img
                    src="/assets/img/others/advertisement.png"
                    alt="advertisement"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="video-post-area section__hover-line white-bg pt-75 pb-80">
          <div className="container">
            <div className="section__title-wrap mb-40">
              <div className="row align-items-end">
                <div className="col-sm-6">
                  <div className="section__title">
                    <span className="section__sub-title">Video</span>
                    <h3 className="section__main-title">Recent Video Post</h3>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="section__read-more text-start text-sm-end">
                    <Link href="/blog">
                      More Video Post <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="video__post-item big-post">
                  <div className="video__post-thumb">
                    <Link href="/blog/14">
                      <img src="/assets/img/blog/blog14.jpg" alt="img" />
                    </Link>
                    <a onClick={() => setOpen(true)} className="popup-video">
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="video__post-content">
                    <ul className="tgbanner__content-meta list-wrap">
                      <li className="category">
                        <Link href="/blog">technology</Link>
                      </li>
                      <li>
                        <span className="by">By</span>{" "}
                        <Link href="/blog">alonso d.</Link>
                      </li>
                      <li>nov 21, 2022</li>
                    </ul>
                    <h3 className="title tgcommon__hover">
                      <Link href="/blog/1">
                        The multiverse is a hypothetical group of multiple
                        universes.
                      </Link>
                    </h3>
                  </div>
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="vfhzo499OeA"
                    onClose={() => setOpen(false)}
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                {data.slice(15, 19).map((item, i) => (
                  <div className="video__post-item side-post" key={i}>
                    <div className="video__post-thumb tgImage__hover">
                      <a onClick={() => setOpen(true)} className="popup-video">
                        <img
                          src={`/assets/img/${item.group}/${item.img}`}
                          alt="img"
                        />
                        <i className="fas fa-play" />
                      </a>
                    </div>
                    <div className="video__post-content">
                      <ul className="tgbanner__content-meta list-wrap">
                        <li className="category">
                          <Link href="/blog">{item.category}</Link>
                        </li>
                        <li>
                          <span className="by">By</span>{" "}
                          <Link href="/blog">alonso d.</Link>
                        </li>
                      </ul>
                      <h3 className="title tgcommon__hover">
                        <Link href={`/blog/${item.id}`}>{item.title}</Link>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="hand-picked-area black-bg fix section__hover-line pt-75 pb-80">
          <div className="container">
            <div className="section__title-wrap section__title-white mb-40">
              <div className="row align-items-end">
                <div className="col-sm-6">
                  <div className="section__title">
                    <span className="section__sub-title">hand-picked</span>
                    <h3 className="section__main-title">More to Watch</h3>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="section__read-more text-start text-sm-end">
                    <Link href="/blog">
                      Hand-Picked Post <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="trending__slider dark-post-slider">
            <div className="swiper-container handpicked-active">
              <TrendingSlider showItem={6} />
            </div>
          </div>
        </section> */}
        <section className="stories-post-area section__hover-line pt-75 pb-40">
          <div className="container">
            <div className="section__title-wrap mb-40">
              <div className="row align-items-end">
                <div className="col-sm-6">
                  <div className="section__title">
                    <span className="section__sub-title">Stories</span>
                    <h3 className="section__main-title">Popular Stories</h3>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="section__read-more text-start text-sm-end">
                    <Link href="/blog">
                      Stories Post <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-gutters-40">
              {popular.slice(0, 2).map((item, i) => (
                <div className="col-md-6" key={i}>
                  <div className="stories-post__item">
                    <div className="stories-post__thumb tgImage__hover">
                      <Link href={`/blog/${item.id}`}>
                        <img src={item.thumbnail} alt="img" />
                      </Link>
                    </div>
                    <div className="stories-post__content video__post-content">
                      <ul className="tgbanner__content-meta list-wrap">
                        <li className="category">
                          <Link href="/blog">{item.category}</Link>
                        </li>
                        <li>
                          <Link href="/blog">{item.writername}</Link>
                        </li>
                        <li>{item.timez}</li>
                      </ul>
                      <h3 className="title tgcommon__hover">
                        <Link href={`/blog/${item.id}`}>{item.heading}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              {popular.slice(2, 5)?.map((item, i) => (
                <div className="col-xl-3 col-lg-4 col-md-6" key={i}>
                  <div className="trending__post stories-small-post__item">
                    <div className="trending__post-thumb tgImage__hover">
                      <Link href={`/blog/${item.id}`}>
                        <img src={item.thumbnail} alt="img" />
                      </Link>
                    </div>
                    <div className="trending__post-content">
                      <ul className="tgbanner__content-meta list-wrap">
                        <li className="category">
                          <Link
                            href={`/business?hello=${encodeURIComponent(
                              item.category
                            )}`}
                          >
                            {item.category}
                          </Link>
                        </li>
                      </ul>
                      <ul className="tgbanner__content-meta list-wrap"><li className="text-black"><Link href={`/blog/${item.id}`}>By {item.writername}</Link></li></ul>
                      <h4 className="title tgcommon__hover">
                        <Link href={`/blog/${item.id}`}>{item.heading}</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="newsletter-area pb-80">
          <div className="container">
            <div className="newsletter__wrap">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6">
                  <div className="newsletter__title">
                    <span className="sub-title">newsletter</span>
                    <h4 className="title">
                      Get notified of the best deals on our WordPress Themes
                    </h4>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="newsletter__form-wrap">
                    <form action="#" className="newsletter__form">
                      <div className="newsletter__form-grp">
                        <input
                          type="email"
                          placeholder="Email address"
                          required
                        />
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            I agree that my submitted data is being collected
                            and stored.
                          </label>
                        </div>
                      </div>
                      <button className="btn" type="submit">
                        <span className="text">Subscribe</span>{" "}
                        <i className="fas fa-paper-plane" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </Layout>
    </>
  );
}
