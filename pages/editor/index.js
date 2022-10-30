import React, { useState, useCallback, useEffect } from 'react'
import style from "./Editor.module.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EmptyState from "../../public/response_empty.gif"
// import JSrunner from "javascript-code-runner";
// import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
// import { atomone } from '@uiw/codemirror-theme-atomone';
import { TerminalContextProvider } from "react-terminal";
import Terminal from "../../components/Terminal/Terminal"
import JsonFormatter from 'react-json-formatter'
import Image from 'next/image';
import EditorView from '../../components/EditorView/EditorView';
import axios from 'axios';

// toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function index() {
    const [selectedMethod, setSelectedMethod] = useState(null)
    const [endpoint,setEndpoint] = useState("")
    const [response,setResponse] = useState(null)
    const [selection,setSelection] = useState(0)
    // const [code, setCode] = useState('')
    let methodTypes = [{ type: "GET" }, { type: "POST" }, { type: "PATCH" }, { type: "PUT" }, { type: "DELETE" }]
    const methods = (select) => {
        setSelectedMethod(select)
    }
    // Editor Code !! Do not Change Anything

    // const onChangeInEditor = useCallback((value, viewUpdate) => {
    //     setCode(value)
    // }, [])


    // const {result,message} = JSrunner(code)
    // console.log(result)
    // console.log(message)
    const jsonStyle = {
        propertyStyle: { color: 'rgb(38, 235, 186)' },
        stringStyle: { color: 'yellow' },
        numberStyle: { color: 'white' }
      }
      const HandleEndponitInput = (e) => {
        if(endpoint === ''){
            toast.warning(<h3>no url found</h3> , {
                 autoClose: 1000,
                position: toast.POSITION.TOP_RIGHT,
            }) //Prince make This Alert to Toast !!
        }else{
            try{
                axios.get(endpoint).then((e)=>{
                    setResponse(JSON.stringify(e.data))
                })
            }catch (e){
                toast.error("Something Went Wrong" ,{
                    autoClose: 2000,
                    position: toast.POSITION.TOP_RIGHT
                }) //Prince make This Alert to Toast !!
            }
        }
      }
    return (
        <main className={style.main_page_editor}>
            <ToastContainer />
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
                        <input onChange={(e)=>setEndpoint(e.target.value)} type="text" value={endpoint} placeholder='API ENDPOINT' />
                        <button onClick={HandleEndponitInput} >send</button>
                    </section>
                    <section className={style.api_methods}>
                        <div onClick={()=>setSelection(0)} className={style.active} style={selection === 0 ? {opacity : 1}:null}> Terminal </div>
                        <div onClick={()=>setSelection(1)} style={selection === 1 ? {opacity : 1}:null} > query </div>
                        <div onClick={()=>setSelection(2)} style={selection === 2 ? {opacity : 1}:null}> header </div>
                        <div onClick={()=>setSelection(3)} style={selection === 3 ? {opacity : 1}:null}> auth </div>
                        <div onClick={()=>setSelection(4)} style={selection === 4 ? {opacity : 1}:null}> body </div>
                    </section>
                </nav>
                {/* //// body parts  */}
                {/* Do Not Change */}
                <section className={style.code_editor_section}>
                <EditorView state={selection} setResponse={setResponse} />

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
                    {/* <pre> */}
                    {response === null ? <Image style={{
                        textAlign:"center"
                    }} width={400} height={400} src={EmptyState} /> : <JsonFormatter json={response} tabWith={2} jsonStyle={jsonStyle} />}
                    {/* </pre> */}
                </section>
                <section className={style.ads_in_res}>
                    <h1 style={{ color: "white", textAlign: "center" }}>ADS</h1>
                </section>
            </main>
        </main>
    )
}

export default index