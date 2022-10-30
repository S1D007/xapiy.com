import { useState } from "react";
import { ReactTerminal } from "react-terminal";
import axios from "axios"
import JsonFormatter from 'react-json-formatter'
// import style from "./Terminal.module.css"
function Terminal({setResponse}) {
    // Define commands here
    const [theme, setTheme] = useState("mycustomtheme");
    const [headers,setHeaders] = useState(null)
    const [status,setStatus] = useState(null)
    // const [headers,setHeaders] = useState(null)
    const jsonStyle = {
        propertyStyle: { color: 'rgb(38, 235, 186)' },
        stringStyle: { color: 'yellow' },
        numberStyle: { color: 'white' }
      }
    const commands = {
        help: (
            <span>
                <strong style={{
                    color: "rgb(38, 235, 186)"
                }} >clear</strong> - clears the console. <br />
                <strong style={{
                    color: "rgb(38, 235, 186)"
                }} >changeTheme {`<Theme Name>`} </strong> - Changes the theme of the
                terminal. Allowed themes - light, dark, material-light, material-dark,
                material-ocean, matrix and dracula. <br />
                <strong style={{
                    color: "rgb(38, 235, 186)"
                }} >Methods To Test Api</strong>  <br />
                <span style={{
                    color: "rgb(38, 235, 186)"
                }}>
                    GET "Api Endpoint"
                </span>
                <br />
                more comming Soon....
            </span>
        ),
        GET: (args) => {
            axios.get(args).then((e)=>{
                setResponse(()=>JSON.stringify(e.data))
                setHeaders(()=>JSON.stringify(e.headers))
                console.log(e)
                setStatus(e.status)
            })
            // const response = data
            return <span>Fetching Data from <span style={{
                color: "rgb(38, 235, 186)"
            }} >{args}</span>
            <br />
            <br />
            <h1>Headers</h1>
            <br />
            <strong><JsonFormatter json={headers} tabWith={2} jsonStyle={jsonStyle} /></strong>
            <br />
            <br />
            <h1 style={{
                display:"inline-block",
                marginRight:"5px"
            }} >Status</h1>
            <strong style={{
                color: "#0d0d0d",
                backgroundColor:"rgb(38, 235, 186)",
                borderRadius:"10px",
                padding:"5px"
            }} >{status}</strong>
            <br />
            </span>
        },
        POST: (args) => `changed path to ${args}`,
        PUT: (args) => `changed path to ${args}`,
        PATCH: (args) => `changed path to ${args}`,
        DELETE: (args) => `changed path to ${args}`,

        changeTheme: (theme) => {
            const validThemes = [
                "light",
                "dark",
                "material-light",
                "material-dark",
                "material-ocean",
                "matrix",
                "dracula",
            ];
            if (!validThemes.includes(theme)) {
                return `Theme ${theme} not valid. Try one of ${validThemes.join(", ")}`;
            }
            setTheme(theme);
        },
    };
    const welcomeMessage = (
        <span style={{
            fontSize: "25px"
        }} >
            ᴡᴇʟᴄᴏᴍe ᴛᴏ <span style={{
                color: "rgb(38, 235, 186)"
            }} >xᴀᴘɪʏ</span> ᴛᴇʀᴍɪɴᴀʟ
            <h6 style={{
                display: "block",
                fontFamily: "monospace"
            }} >Type <span style={{
                color: "yellow"
            }} >help</span> For Help</h6>
        </span>
    );
    return (
            <ReactTerminal
            style={{
                overflow: "hidden",
                border: "12px solid red"
            }}
                // className={style.terminal}
                welcomeMessage={welcomeMessage}
                prompt={<span style={{
                    color: "rgb(38, 235, 186)",
                }} >$</span>}
                themes={{
                    mycustomtheme: {
                        themeBGColor: "#0d0d0d",
                        themeToolbarColor: "#0d0d0d",
                        themeColor: "#fff",
                        themePromptColor: "#a917a8",
                    }
                }}
                theme={theme}
                commands={commands}
                errorMessage={<span>
                    <h4 style={{
                display: "block",
                fontFamily: "monospace"
            }} >Command Not Found ! <br /> Type <span style={{
                color: "yellow"
            }} >help</span> For Help</h4>
                </span>}
            />
    );
}
export default Terminal;