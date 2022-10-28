import React , {useState}from 'react'
import style from "./Editor.module.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { atomone } from '@uiw/codemirror-theme-atomone';

function index() {
    const [fetchmethod, setfetchmethod] = useState("")
    let fetchtype = [{type:"GET"} , {type:"POST"}, {type:"PATCH"} ,  {type:"PUT"} , {type:"DELETE" }]
    const fetchtypefunc = (x)=>{
        setfetchmethod(x)
    }
    return (
        <main className={style.main_page_editor}>
            <main className={style.editor_main}>
                <nav className={style.editor_nav}>
                    <section className={style.input_api_url}>
                        <div className={style.req_method}>
                            <p>{fetchmethod}</p>
                            <KeyboardArrowDownIcon />
                            <div className={style.req_method_change_option}>
                                {
                                    fetchtype.map((x)=>{
                                        return(
                                            <li key={x.type} onClick={()=>{fetchtypefunc(x.type)}}>{x.type}</li>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <input type="text" placeholder='API ENDPOINT' />
                        <button>send</button>
                    </section>
                    <section className={style.api_methods}>
                        <div className={style.active} style={{ opacity: 1 }}> query </div>
                        <div> header </div>
                        <div> auth </div>
                        <div> body </div>
                    </section>
                </nav>
                {/* //// body parts  */}
                <section className={style.code_editor_section}>
                    <CodeMirror
                        value="console.log('hello world!');"
                        height="100%"
                        theme={atomone}
                        maxHeight = "40rem"
                        // maxWidth='100%'
                        extensions={[javascript({ jsx: true,typescript:true })]}
                        // onChange={onChange}
                    />
                </section>
            </main>


            <main className={style.response_main}>
                <nav className={style.response_nav}>
                    <section className={style.status_and_more}>
                        <div><h1>Status</h1>:<p>200</p></div>
                        <div><h1>size</h1>:<p>200</p></div>
                        <div><h1>time</h1>:<p>200</p></div>
                    </section>
                    <section className={style.response_more}>
                        <div style={{ opacity: 1 }}> Response</div>
                        <div>Header</div>
                        <div>Cookies</div>
                    </section>
                </nav>
                <section contentEditable="true" className={style.response_output}>
                    <pre>{`   

    {
    "_id": "6353c73291e99b29683c163a",
    "category": "General Knowledge",
    "level": "hard",
    "question": "If someone said &quot;you are olid&quot;,
     what would they mean?",
    "options": [
    "You are out of shape/weak.",
    "Your appearance is repulsive.",
    "You are incomprehensible/an idiot."
    ],
    "correctAnswer": "You smell extremely unpleasant.",
    "price": 5,
    "prize": 19,
    "__v": 0
    }
                    `}
                    </pre>
                </section>
                <section className={style.ads_in_res}>
                    <h1 style={{ color: "white", textAlign: "center" }}>ADS</h1>
                </section>
            </main>
        </main>
    )
}

export default index