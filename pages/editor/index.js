import React, { useState, useCallback, useEffect } from 'react'
import style from "./Editor.module.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import JSrunner from "javascript-code-runner";
// import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
// import { atomone } from '@uiw/codemirror-theme-atomone';
import { TerminalContextProvider } from "react-terminal";
import Terminal from "../../components/Terminal/Terminal"

function index() {
    const [selectedMethod, setSelectedMethod] = useState(null)
    const [responseFromServer,setResponseFromServer] = useState(null)
    // const [code, setCode] = useState('')
    let methodTypes = [{ type: "GET" }, { type: "POST" }, { type: "PATCH" }, { type: "PUT" }, { type: "DELETE" }]
    const methods = (select) => {
        setSelectedMethod(select)
    }
    useEffect(() => {
        // Perform localStorage action only
        // localStorage.setItem("response",false)
        const response = window.localStorage.getItem("response")
        setResponseFromServer(response)
      })
    // Editor Code !! Do not Change Anything

    // const onChangeInEditor = useCallback((value, viewUpdate) => {
    //     setCode(value)
    // }, [])


    // const {result,message} = JSrunner(code)
    // console.log(result)
    // console.log(message)

    return (
        <main className={style.main_page_editor}>
            <main className={style.editor_main}>
                <nav className={style.editor_nav}>
                    <section className={style.input_api_url}>
                        <div className={style.req_method}>
                            <p>{selectedMethod || methodTypes[0].type}</p>
                            <KeyboardArrowDownIcon />
                            <div className={style.req_method_change_option}>
                                {
                                    methodTypes.map((select) => {
                                        return (
                                            <li key={select.type} onClick={() => { methods(select.type) }}>{select.type}</li>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <input type="text" placeholder='API ENDPOINT' />
                        <button>send</button>
                    </section>
                    <section className={style.api_methods}>
                        <div className={style.active} style={{ opacity: 1 }}> Terminal </div>
                        <div> query </div>
                        <div> header </div>
                        <div> auth </div>
                        <div> body </div>
                    </section>
                </nav>
                {/* //// body parts  */}
                {/* Do Not Change */}
                <section className={style.code_editor_section}>
                    <TerminalContextProvider>
                        <Terminal />
                    </TerminalContextProvider>
                    {/* <CodeMirror
                        value="console.log('hello Xapiy!');"
                        height="30rem"
                        theme={atomone}
                        maxHeight="40rem"
                        // maxWidth='100%'
                        extensions={[javascript({ jsx: true, typescript: true })]}
                        onChange={onChangeInEditor}
                    /> */}
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
                <section className={style.response_output}>
                    <pre>
                    {responseFromServer === null ? "Hello" : responseFromServer}
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