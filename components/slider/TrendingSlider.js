import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from 'react'
import data from "@/util/blogData"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"
import {createClient} from 'contentful';

export default function TrendingSlider({ showItem }) {

    const  [Tendall, setTendall] = useState([])
    const client =  createClient({
        space:'t0pszie0jiqu',
        accessToken:'bm2qgxL1ruXxTPkEQT0KgtAuHOwVxlOzOuj-AoNo-AM',
      });


      useEffect(()=>{
        // Tending News
    const TendData = async()=>{
        let tending = await client.getEntries({content_type:'tending',  select:'fields'})
        // setTendall(tending?.items)
        const newData = await Promise.all(
            tending?.items.map(async (item) => {
              // console.log(item)
              // console.log("tending",item.fields)
               //console.log(item.fields.storyId.fields.writerId.sys.id)
               //var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
               let timez = new Date(item.fields.storyId.sys.createdAt)
               const monthNames = [
                "Jan", "Feb", "Mar",
                "Apr", "May", "Jun", "Jul",
                "Aug", "Sept", "Oct",
                "Nov", "Dec"
              ];
                    
              const day = timez.getDate();
              const monthIndex = timez.getMonth();
              const year = timez.getFullYear();
              const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
    
              let data = await client.getEntry(item.fields.storyId.fields.categoryId.sys.id);
              let writer = await client.getEntry(item.fields.storyId.fields.writerId.sys.id)
              let answer = data.fields.category;
               let answriter = writer.fields.name
              return {
                heading: item.fields.storyId.fields.heading,
                summary: item.fields.storyId.fields.summary,
                category: answer,
                writer:answriter,
                thumbnail:item.fields.storyId.fields.thumbnail.fields.file.url,
                id:item.sys.id,
                timez:formattedDate
    
              };
            })
          );
    
          setTendall(newData)
    }
    
    TendData()
    
     
    },[])


    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={showItem}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.block-gallery-pagination'
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: showItem,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: showItem,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                {Tendall.slice(0, 8).map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="trending__post">
                            <div className="trending__post-thumb tgImage__hover">
                                
                                <Link href={`/blog/${item.id}`}><img src={item.thumbnail} alt="img" /></Link>
                                {/* {item.trending && <span className="is_trend"><i className="fas fa-bolt" /></span>} */}
                            </div>
                            <div className="trending__post-content">
                                <ul className="tgbanner__content-meta list-wrap">
                                    <li className="category"><Link
                                       href={`/business?hello=${encodeURIComponent(item.category)}`}
                                     >{item.category}</Link></li>
                                     
                                   
                                </ul>
                                <ul className="tgbanner__content-meta list-wrap"><li className="text-black"><Link href={`/blog/${item.id}`}>By {item.writer}</Link></li></ul>
                                <h4 className="title tgcommon__hover"><Link href={`/blog/${item.id}`}>{item.heading}</Link></h4>
                                
                                
                            </div>
                            
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
