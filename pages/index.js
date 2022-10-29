import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import SummarizeIcon from '@mui/icons-material/Summarize';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router'

// Components

export default function index() {
  const router = useRouter()
  return (
    <div>
      <main className={style.main_page}>
      <main className={style.home_container}>
        <section className={style.home_getstarted}>
          <h1>Apis that makes you <span>productive</span></h1>
          <h2>Forget paid apis</h2>
          <p>Choose From <span style={{
            fontWeight:"bold"
          }} >50+</span> Categories </p>
            <h3>get started and browse free api</h3>
            <button onClick={() => {router.push("/editor")}}>get started <ArrowForwardIcon/></button>
        </section>
        <Image className={style.landing_img} width={500} height={500} src="/landing_ui.gif" alt="img" />
      </main>
      </main>
    </div>
  )
}
