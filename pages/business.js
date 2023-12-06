import BlogSidebar2 from "@/components/elements/BlogSidebar2";
import Lottie from "react-lottie";
import Layout from "@/components/layout/Layout";
import animationData from "public/assets/loading.json";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import ReactPaginate from "react-paginate";
import { FaXTwitter } from "react-icons/fa6";
import {
  
  FacebookShareButton,
 
  LinkedinShareButton,
 
  TwitterShareButton,
  
} from "react-share";
export default function Business() {
  const router = useRouter();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

 
  const { hello } = router.query;
  // console.log(hello)
  const [pageSize, setpageSize] = useState(6);
  const [currentPage, setcurrentPage] = useState(1);
  const [Data, SetData] = useState([]);
  const [numberofpage, setnumberofpage] = useState(1);
  const [orignalarr, setorignalarr] = useState([]);
  const [randomx, setRandomx] = useState([])

  const client = createClient({
    space: "t0pszie0jiqu",
    accessToken: "bm2qgxL1ruXxTPkEQT0KgtAuHOwVxlOzOuj-AoNo-AM",
  });

  useEffect(() => {
    const fetchStories = async () => {
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
      // setorignalarr(n)
      const shuffledArray = newData.slice().sort(() => Math.random() - 0.5);
      let arrrandom =  shuffledArray.slice(0, 4); 
      setRandomx(arrrandom)

      let filterdata = newData.filter(
        (item) => item.category.toLowerCase() == hello.toLowerCase()
      );
      setorignalarr(filterdata);
      let page = Math.ceil(filterdata.length / 6);
      const indexofLastPost = currentPage * pageSize;
      const indexofFirstPost = indexofLastPost - pageSize;
      let ansdata = filterdata?.slice(indexofFirstPost, indexofLastPost);
      SetData(ansdata);
      setnumberofpage(page);
    };

    fetchStories();
  }, [hello]);

  const handleNext = (ans) => {
    let number = ans.selected + 1;
    const indexofLastPost = number * pageSize;
    const indexofFirstPost = indexofLastPost - pageSize;
    let ansdata = orignalarr.slice(indexofFirstPost, indexofLastPost);
    console.log(ansdata);
    SetData(ansdata);
  };

  return (
    <>
      <Layout breadcrumbCategory="Category" breadcrumbPostTitle={hello}>
        <section className="blog-details-area pt-80 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-1">
                <div className="blog-details-social">
                  <ul className="list-wrap">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <TwitterShareButton
                            url={`https://${location.hostname}`}
                          >
                            <FaXTwitter />
                          </TwitterShareButton>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FacebookShareButton
                            url={`https://${location.hostname}`}
                          >
                           <FaFacebookF />
                          </FacebookShareButton>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <LinkedinShareButton
                            url={`https://${location.hostname}`}
                          >
                            <i className="fab fa-linkedin-in" />
                          </LinkedinShareButton>
                        </Link>
                      </li>
                      
                      
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                {Data && Data.length > 0 ? (
                  <div className="blog-post-wrapper">
                    {Data && Data.length > 0 ? (
                      <div className="latest__post-item" key={Data[0].id}>
                        <div className="latest__post-thumb tgImage__hover">
                          <Link
                            href={`/blog/${encodeURIComponent(Data[0].id)}`}
                          >
                            <img
                              src={
                                Object.keys(Data[0]).length > 0
                                  ? Data[0].thumbnail
                                  : ""
                              }
                              alt="img"
                            />
                          </Link>
                        </div>
                        <div className="latest__post-content">
                          <ul className="tgbanner__content-meta list-wrap">
                            <li className="category">
                              <Link
                                href={`/blog/${encodeURIComponent(
                                  Object.keys(Data[0]).length > 0
                                    ? Data[0].id
                                    : ""
                                )}`}
                              >
                                {Object.keys(Data[0]).length > 0
                                  ? Data[0].category
                                  : ""}
                              </Link>
                            </li>
                            <li>
                              <span className="by">By</span>{" "}
                              <Link
                                href={`/blog/1?id=${encodeURIComponent(
                                  Object.keys(Data[0]).length > 0
                                    ? Data[0].id
                                    : ""
                                )}`}
                              >
                                {Object.keys(Data[0]).length > 0
                                  ? Data[0].writer
                                  : ""}
                                .
                              </Link>
                            </li>
                            <li>nov 22, 2022</li>
                          </ul>
                          <h3 className="title tgcommon__hover">
                            <Link
                              href={`/blog/${encodeURIComponent(
                                Object.keys(Data[0]).length > 0
                                  ? Data[0].id
                                  : ""
                              )}`}
                            >
                              {Object.keys(Data[0]).length > 0
                                ? Data[0].heading
                                : ""}
                            </Link>
                          </h3>
                          <p>{Data[0].summary}</p>
                          <div className="latest__post-read-more">
                            <Link
                              href={`/blog/${encodeURIComponent(
                                Object.keys(Data[0]).length > 0
                                  ? Data[0].id
                                  : ""
                              )}`}
                            >
                              Read More{" "}
                              <i className="far fa-long-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="row row--10">
                      {Data.slice(1, 3).length > 0
                        ? Data.slice(1, 3).map((item, i) => {
                            return (
                              <div
                                className="col-lg-6 col-md-6 col-sm-6 col-12 mt--20"
                                key={i}
                              >
                                <div className="latest__post-item">
                                  <div className="latest__post-thumb tgImage__hover">
                                    <Link
                                      href={`/blog/${encodeURIComponent(
                                        item.id
                                      )}`}
                                    >
                                      <img src={item.thumbnail} alt="img" />
                                    </Link>
                                  </div>
                                  <div className="latest__post-content">
                                    <ul className="tgbanner__content-meta list-wrap">
                                      <li className="category">
                                        <Link href="/blog">
                                          {item.category}
                                        </Link>
                                      </li>
                                      <li>
                                        <span className="by">By</span>{" "}
                                        <Link href="/blog">{item.writer}.</Link>
                                      </li>
                                      <li>
                                        <Link href="/blog">{item.timez}.</Link>
                                      </li>
                                    </ul>
                                    <h3 className="title tgcommon__hover">
                                      <Link
                                        href={`/blog/${encodeURIComponent(
                                          item.id
                                        )}`}
                                      >
                                        {Data[0].heading}
                                      </Link>
                                    </h3>
                                    <p>{item.summary}</p>

                                    <div className="latest__post-read-more">
                                      <Link
                                        href={`/blog/${encodeURIComponent(
                                          item.id
                                        )}`}
                                      >
                                        Read More{" "}
                                        <i className="far fa-long-arrow-right" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>

                    <div className="row row--10">
                      {Data.slice(3, 5).length > 0
                        ? Data.slice(3, 5).map((item, i) => {
                            return (
                              <div
                                className="col-lg-6 col-md-6 col-sm-6 col-12 mt--20"
                                key={i}
                              >
                                <div className="latest__post-item">
                                  <div className="latest__post-thumb tgImage__hover">
                                    <Link
                                      href={`/blog/${encodeURIComponent(
                                        item.id
                                      )}`}
                                    >
                                      <img src={item.thumbnail} alt="img" />
                                    </Link>
                                  </div>
                                  <div className="latest__post-content">
                                    <ul className="tgbanner__content-meta list-wrap">
                                      <li className="category">
                                        <Link href="/blog">
                                          {item.category}
                                        </Link>
                                      </li>
                                      <li>
                                        <span className="by">By</span>{" "}
                                        <Link href="/blog">{item.writer}.</Link>
                                      </li>
                                      <li>
                                        <Link href="/blog">{item.timez}.</Link>
                                      </li>
                                    </ul>
                                    <h3 className="title tgcommon__hover">
                                      <Link
                                        href={`/blog/${encodeURIComponent(
                                          item.id
                                        )}`}
                                      >
                                        {item.heading}
                                      </Link>
                                    </h3>
                                    <p>{item.summary}</p>

                                    <div className="latest__post-read-more">
                                      <Link
                                        href={`/blog/${encodeURIComponent(
                                          item.id
                                        )}`}
                                      >
                                        Read More{" "}
                                        <i className="far fa-long-arrow-right" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>

                    {Data && Data.length > 0 ? (
                      <div className="latest__post-item">
                        <div className="latest__post-thumb tgImage__hover">
                          <Link
                            href={`/blog/${encodeURIComponent(
                              Data.length >= 6 &&
                                Object.keys(Data[5]).length > 0
                                ? Data[5].id
                                : ""
                            )}`}
                          >
                            {Data[5] &&
                            Object.keys(Data[5]).length > 0 &&
                            Data[5].thumbnail ? (
                              <img
                                src={
                                  Data[5] &&
                                  Object.keys(Data[5]).length > 0 &&
                                  Data[5].thumbnail
                                    ? Data[5].thumbnail
                                    : ""
                                }
                                alt="img"
                              />
                            ) : (
                              ""
                            )}
                          </Link>
                        </div>
                        <div className="latest__post-content">
                          <ul className="tgbanner__content-meta list-wrap">
                            <li className="category">
                              <Link
                                href={`/blog/${encodeURIComponent(
                                  Data.length >= 6 &&
                                    Object.keys(Data[5]).length > 0
                                    ? Data[5].id
                                    : ""
                                )}`}
                              >
                                {Data[5] && Object.keys(Data[5]).length > 0
                                  ? Data[5].category
                                  : ""}
                              </Link>
                            </li>
                            {Data[5] && Object.keys(Data[5]).length > 0 ? (
                              <li>
                                <span className="by">By </span>{" "}
                                <Link href="/blog">
                                  {Data[5] && Object.keys(Data[5]).length > 0
                                    ? Data[5].writer
                                    : ""}
                                  .
                                </Link>
                              </li>
                            ) : (
                              ""
                            )}

                            <li>
                              {Data[5] && Data[5].timez ? Data[5].timez : ""}
                            </li>
                          </ul>
                          <h3 className="title tgcommon__hover">
                            <Link
                              href={`/blog/${encodeURIComponent(
                                Data.length >= 6 &&
                                  Object.keys(Data[5]).length > 0
                                  ? Data[5].id
                                  : ""
                              )}`}
                            >
                              {Data[5] && Object.keys(Data[5]).length > 0
                                ? Data[5].heading
                                : ""}
                            </Link>
                          </h3>
                          <p>
                            {Data[5] && Data[5].presummary
                              ? Data[5].presummary
                              : ""}
                          </p>
                          {Data.length >= 6 &&
                          Object.keys(Data[5]).length > 0 ? (
                            <div className="latest__post-read-more">
                              <Link
                                href={`/blog/${encodeURIComponent(
                                  Data.length >= 6 &&
                                    Object.keys(Data[5]).length > 0
                                    ? Data[5].id
                                    : ""
                                )}`}
                              >
                                Read More{" "}
                                <i className="far fa-long-arrow-right" />
                              </Link>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                    // four random array
                    <div className="blog-post-wrapper">
                        
                        <section
                      style={{
                        textAlign: "center",
                        fontSize: "xx-large",
                        fontWeight: "bold",
                        padding: "4rem",
                      }}
                    >
                      <Lottie options={defaultOptions} width={300} />
                      <h1>Coming Soon!</h1>
                      <h4>Hold onto your hats</h4>
                      <h4>mind-blowing content is loading!</h4>
                      <h4>Checkout other articles!</h4>
                    </section>

                    {randomx && randomx.length > 0?
                     <div className="latest__post-item" key={randomx[0].id}>
    
                     <div className="latest__post-thumb tgImage__hover">
                       <Link href={`/blog/${encodeURIComponent(randomx[0].id)}`} >
                         <img
                           src={Object.keys(randomx[0]).length > 0?randomx[0].thumbnail:""}
                           alt="img"
                         />
                       </Link>
                     </div>
                     <div className="latest__post-content">
                       <ul className="tgbanner__content-meta list-wrap">
                         <li className="category">
                           <Link href={`/blog/${encodeURIComponent(Object.keys(  randomx[0]).length >0? randomx[0].id:"")}`} >{Object.keys(randomx[0]).length >0?randomx[0].category:""}</Link>
                         </li>
                         <li>
                           <span className="by">By</span>{" "}
                           <Link href={`/blog/1?id=${encodeURIComponent(Object.keys(randomx[0]).length >0?randomx[0].id:"")}`} >{Object.keys(randomx[0]).length >0?randomx[0].writer:""}.</Link>
                         </li>
                         <li>nov 22, 2022</li>
                       </ul>
                       <h3 className="title tgcommon__hover">
                         <Link href={`/blog/${encodeURIComponent(Object.keys(randomx[0]).length >0?randomx[0].id:"")}`} >
                            {Object.keys(randomx[0]).length >0?randomx[0].heading:""}
                         </Link>
                       </h3>
                       <p>
                       {randomx[0].summary}
                       </p>
                       <div className="latest__post-read-more">
                         <Link  href={`/blog/${encodeURIComponent(Object.keys(randomx[0]).length >0?randomx[0].id:"")}`}>
                           Read More <i className="far fa-long-arrow-right" />
                         </Link>
                       </div>
                     </div>
    
    
                   </div>
                    
                    :""}
                 
                  
                  
                  {randomx && randomx.length > 0?
                  <div className="latest__post-item">
                  <div className="latest__post-thumb tgImage__hover">
                    <Link  href={`/blog/${encodeURIComponent(randomx.length >= 4 && Object.keys(randomx[3]).length > 0 ? randomx[3].id : "")}`}>
                    {randomx[3] && Object.keys(randomx[3]).length > 0 && randomx[3].thumbnail ?
                    
                    <img
                    src={randomx[3] && Object.keys(randomx[3]).length > 0 && randomx[3].thumbnail ? randomx[3].thumbnail : ""}
                    alt="img"
                  />
                    : ""}
                     
                    </Link>
                  </div>
                  <div className="latest__post-content">
                    <ul className="tgbanner__content-meta list-wrap">
                      <li className="category">
                        <Link  href={`/blog/${encodeURIComponent(randomx.length >= 4 && Object.keys(randomx[3]).length > 0 ? randomx[3].id : "")}`}>{randomx[3] && Object.keys(randomx[3]).length > 0 ? randomx[3].category : ""}</Link>
                      </li>
                      {randomx[3] && Object.keys(randomx[3]).length > 0 ?
                       <li>
                       <span className="by">By </span>{" "}
                       <Link href="/blog">{randomx[3] && Object.keys(randomx[3]).length > 0 ? randomx[3].writer : ''}.</Link>
                     </li>
                      : ''}
                     
                      <li>{randomx[3] && randomx[3].timez ? randomx[3].timez :''}</li>
                    </ul>
                    <h3 className="title tgcommon__hover">
                      <Link  href={`/blog/${encodeURIComponent(randomx.length >= 4 && Object.keys(randomx[3]).length > 0 ? randomx[3].id : "")}`}>
                      {randomx[3] && Object.keys(randomx[3]).length > 0 ? randomx[3].heading : ""}
                      </Link>
                    </h3>
                    <p>
                        {randomx[3] && randomx[3].presummary ? randomx[3].presummary : ""}
                    </p>
                    {randomx.length >= 4 && Object.keys(randomx[3]).length > 0 ?
                     <div className="latest__post-read-more">
                     <Link  href={`/blog/${encodeURIComponent(randomx.length >= 4 && Object.keys(randomx[3]).length > 0 ? randomx[3].id : "")}`}>
                       Read More <i className="far fa-long-arrow-right" />
                     </Link>
                   </div>
                    
                    : ""}
                   
                  </div>
                </div>
                  :""}
                </div>
                )}

                {Data.length < 6 ? (
                  ""
                ) : (
                  <div className="pagination__wrap">
                    <ReactPaginate
                      previousLabel={"<"}
                      nextLabel={">"}
                      pageCount={numberofpage}
                      breakLabel={"..."}
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={1}
                      onPageChange={handleNext}
                      containerClassName={"list-wrap"}
                      // pageclassNameName={' '}
                      pageLinkClassName={""}
                      // previousClassName={'bg-gray-400 rounded-lg px-2 py-1 text-lg justify-center items-center text-white'}
                      // nextClassName={'bg-gray-400 px-2 py-1 text-lg justify-center items-center text-white rounded-lg '}
                    />
                  </div>
                )}
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <BlogSidebar2 />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
