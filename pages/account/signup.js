import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import style from "./auth.module.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Signup = () => {
    const handlesubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <main className={style.main_page}>
        {/* this main containeir for max width and for resposnive ui   */}
        <main className={style.auth_main}>
            {/* /// ui container  */}
            <section className={style.auth_ui_section}>
                <div></div>
            </section>
            {/* /// ui container  */}

        <form className={style.auth_ui_form} onSubmit={handlesubmit}>
            <header>
                <h1>signup</h1>
                <p>signup to access all hiden features</p>
            </header>
            <div className={style.input_box}>
                <AccountCircleIcon />
                <input type="text" placeholder='name'/>
            </div>
            <div className={style.input_box}>
                <MailIcon />
                <input type="text" placeholder='email'/>
            </div>
            {/* ------password ------ */}
            <div className={`${style.input_box} ${style.input_box_password}`}>
                <LockIcon />
                <input type="text" placeholder='password'/>
                <div className={style.show_hide_icon}> 
                <VisibilityIcon/>
                </div>
            </div>S
            {/* ------password ------ */}
            <button>signup</button>
            <div className={style.or}><hr />or<hr /></div>
            <section className={style.login_with_container}>
                <div><Image src={"/google_icon.svg"} width={30}  height={30}/> login with gogle</div>
                <div><Image src={"/github_icon.svg"} width={35}  height={35}/> login with gogle</div>
            </section>
            <div>
                <p> already an account <Link href="/account/login"> ? login</Link></p>
            </div>
        </form>
        </main>
    </main>
  )
}

export default Signup