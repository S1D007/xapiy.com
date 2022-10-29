import React from 'react'
import style from "./edit.module.css"

const Editor = () => {
  return (
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
  )
}

export default Editor