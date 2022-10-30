import React , {useState , useRef}from 'react'
import Link from 'next/link'
import style from "./browse.module.css"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const index = () => {
    let scrolldiv = useRef()
    const prevScroll = ()=>{
        scrolldiv.current.scrollBy(-150 , 0)
    }
    const nextScroll = ()=>{
        scrolldiv.current.scrollBy(150 , 0)
    }

  return (
    <main className={style.main_page}>
        <main className={style.width_container}>
            {/* /// ads  */}
            <section className={style.ad_section}>
                <h1>ads</h1>
            </section>
            {/* /// ads  */}

            <section className={style.content_body_nav_section}>
            <nav className={style.sidebar_nav}>
                <header>Categories</header>
                <li><Link href="#">api store</Link></li>
                <li><Link href="#">api store</Link></li>
            </nav>
            <main className={style.main_content_body}>
                <section className={style.header_category}>
                    <button> back </button>
                    <button> next </button>
                </section>
                {/* // more containers  */}
                <section className={style.more_api_container}>
                    <h1>header</h1>
                    <section className={style.scroll_in_x} ref={scrolldiv}>
                        <button className={style.prev_btn} onClick={prevScroll}>preveos</button>
                        <div><h1>asdf</h1></div>
                        <div>asdfaf</div>
                        <div>adfasdf</div>
                        <div><h1>asdf</h1></div>
                        <div>asdfaf</div>
                        <div>adfasdf</div>
                        <div><h1>asdf</h1></div>
                        <div>asdfaf</div>
                        <div>adfasdf</div>
                        <button className={style.next_btn} onClick={nextScroll}>next</button>
                    </section>
                </section>

            </main>
            </section>
        </main>
    </main>
  )
}

export default index