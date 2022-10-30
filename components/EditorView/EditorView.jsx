import React from 'react'
import { TerminalContextProvider } from 'react-terminal'
import Terminal from '../Terminal/Terminal'
import Auth from "../EditorComponent/Auth"
import Body from "../EditorComponent/Body"
import EditorQuery from "../EditorComponent/EditorQuery"
import Header from "../EditorComponent/Header"
function EditorView({ state, setResponse }) {
    if (state === 0) {
        return <TerminalContextProvider>
            <Terminal setResponse={setResponse} />
        </TerminalContextProvider>
    }else if(state === 1){
        return <EditorQuery/>
    }else if(state === 2){
        return <Header/>
    }else if(state === 3){
        return <Auth/>
    }else if(state === 4){
        return <Body/>
    }
}

export default EditorView