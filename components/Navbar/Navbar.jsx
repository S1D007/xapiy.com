import React, { useState } from 'react'
import style from "./navbar.module.css"
import ClearAllIcon from '@mui/icons-material/ClearAll';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

import Link from 'next/link';
import { useRouter } from 'next/router'
import Image from 'next/image';

const Navbar = () => {

  // init of router
  const router = useRouter()
  const [handlemenu, sethandlemenu] = useState("")
  const togglemenu = () => {
    if (handlemenu == "") { sethandlemenu(style.open_menu) } else { sethandlemenu("") }
  }

  return (
    <nav className={style.main_nav}>
      <section className={style.logo}>
        <div className={style.menu_icons}>
          <ClearAllIcon onClick={() => { togglemenu() }} />
        </div>
        <Link href="/">
          <Image width={100} height={100} src="/xapiy_logo.png" alt="img" />
        </Link>
      </section>

      <section className={style.nav_search}>
        <SearchIcon />
        <input type="search" placeholder='search api' />
      </section>

      <section className={`${style.links_and_more} ${handlemenu}`}>
        <section className={`${style.for_mobile} ${handlemenu}`}>
          <main className={style.close_nav_and_more}>
            <Image onClick={() => { router.push("/"); togglemenu() }} width={70} height={30}  src="/xapiy_logo.png" alt="img" />
            <div className={style.menu_icons}>
              <CloseIcon onClick={() => { togglemenu() }} />
            </div>
          </main>
          <Link href="/browse" onClick={() => { togglemenu() }}>Browse</Link>
          <Link href="/editor" onClick={() => { togglemenu() }}>Test API</Link>
          <button onClick={() => { router.push("/account/signup"); togglemenu() }}>sign up</button>
        </section>
      </section>
    </nav>
  )
}

export default Navbar