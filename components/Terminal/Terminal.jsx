import { useState } from "react";
import { ReactTerminal } from "react-terminal";
// import style from "./Terminal.module.css"
function Terminal(props) {
    // Define commands here
    const [theme, setTheme] = useState("mycustomtheme");

    const commands = {
        help: (
            <span>
                <strong style={{
                    color: "rgb(38, 235, 186)"
                }} >clear</strong> - clears the console. <br />
                <strong style={{
                    color: "rgb(38, 235, 186)"
                }} >change_prompt &lt;PROMPT&gt;</strong> - Change the prompt of the
                terminal. <br />
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
        GET: async (args) => {
            const data = await fetch(args)
            const resp = await data.json()
            localStorage.setItem("response",JSON.stringify(resp))
            // const response = data
            return <span>Fetching Data from <span style={{
                color: "rgb(38, 235, 186)"
            }} >{args}</span>
            <br />
            <strong>Happy Hacking</strong>
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
            ᴡᴇʟᴄᴏᴍ ᴛᴏ <span style={{
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
            overflow: "hidden"
        }}
            // className={style.terminal}
            welcomeMessage={welcomeMessage}
            prompt={<span style={{
                color: "rgb(38, 235, 186)"
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
        />
    );
}
export default Terminal;