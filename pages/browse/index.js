import React from 'react'
import style from "./browse.module.css"

const index = () => {
  return (
    <main className={style.main_page}>
        <main className={style.width_container}>
            {/* /// ads  */}
            <section className={style.ad_section}>
                <h1>ads</h1>
            </section>
            {/* /// ads  */}

            <section className={style.content_nav_section}>
            <nav className={style.sidebar_nav}>
                <li>home</li>
                <li>ulala </li>
                <li>home</li>
                <li>ulala </li>
            </nav>
            <main className={style.main_content_body}>
                <section className={style.header_category}>
                    <button> back </button>
                    <button> next </button>
                </section>
            </main>
            </section>
        </main>
    </main>
  )
}

export default index