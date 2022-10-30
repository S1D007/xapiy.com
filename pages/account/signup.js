import React , {useState , useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import style from "./auth.module.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Signup = () => {
    // states 
    const [passtype, setpasstype] = useState("password")
    const [confirmpasstype, setconfirmpasstype] = useState("password")
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [validation, setvalidation] = useState(false)
    const [autherror, setautherror] = useState("")

//  function for validation 

const funcvalidation = () => {
  if (username.length > 0 && email.length > 0 && password.length > 0 && confirmpassword.length > 0) {
    validname()
  }
  else {
    setautherror("all fields required")
    setvalidation(false)
  }
}
function validname() {
    if (username.length > 3) {
      validemail()
    }
    else {
      setvalidation(false)
      setautherror("name is to short")
    }
  }
  function validemail() {
    const regemail = /@gmail.com/
      if (email.length >= 11 && regemail.test(email) === true) { 
        validpassword()
      }
      else {
        setautherror("email not valid , please enter valid email")
        setvalidation(false)
      }
    }
    function validpassword() { 
        if (password === confirmpassword) {
          setvalidation(true)
          setautherror("")
        }
        else{
          setautherror("password and confirm password must be same"),
           setvalidation(false)}
      }
      // final data in object
      const finaldata = { username, email, password, confirmpassword }

      useEffect(() => {
        funcvalidation()
      }, [finaldata])

    const handlesubmit = (e)=>{
        e.preventDefault()
        if (validation === true) {
            console.log("fine your data is =>", finaldata)
            setusername(""); setemail(""); setpassword("");
            setconfirmpassword("");setautherror("")
          }
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
                <span>{autherror}</span>
            </header>
            {/* name */}
            <div className={style.input_box}>
                <AccountCircleIcon/>
                <input type="text" placeholder='enter your name' value={username}
                onChange={(e) => { setusername(e.target.value)}}/>
            </div>
            {/* mail */}
            <div className={style.input_box}>
            <MailIcon />
              <input type="text" placeholder='enter your email' value={email}
                onChange={(e) => { setemail(e.target.value) }} />
            </div>
            {/* ------password ------ */}
            <div className={`${style.input_box} ${style.input_box_password}`}>
                <LockIcon />
                <input type={passtype} placeholder='password' value={password}
                onChange={(e) => { setpassword(e.target.value) }} />
              <div className={style.eye_icon} onClick={() => { { passtype === "password" ? setpasstype("text") : setpasstype("password") } }}>
                {passtype === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            <div className={`${style.input_box} ${style.input_box_password}`}>
                <LockIcon />
                <input type={confirmpasstype} placeholder='confirm password' value={confirmpassword}
                onChange={(e) => { setconfirmpassword(e.target.value) }} />
              <div className={style.eye_icon} onClick={() => { { confirmpasstype === "password" ? setconfirmpasstype("text") : setconfirmpasstype("password") } }}>
                {confirmpasstype === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            {/* ------password ------ */}
            <button className={style.auth_btn}>signup</button>

            <div className={style.or}><hr />or<hr /></div>
            <section className={style.login_with_container}>
                <div><Image src={"/google_icon.svg"} alt="img" width={28}  height={28}/> login with gogle</div>
                <div><Image src={"/github_icon.svg"} alt="img" width={30}  height={30}/> login with gogle</div>
            </section>
            <div className={style.change_auth_methode}>
                <p> already an account <Link href="/account/login"> ? login</Link></p>
            </div>
        </form>
        </main>
    </main>
  )
}

export default Signup