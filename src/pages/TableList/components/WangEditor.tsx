import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig } from '@wangeditor/editor'
type propsType = {
  getHtmlValue: (html: string) => void
}
function MyEditor(props: propsType) {
  const [editor, setEditor] = useState<IDomEditor | null>(null) // 存储 editor 实例
  const [html, setHtml] = useState('') // 编辑器内容

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    editor?.focus()
  }, [])

  const toolbarConfig = { }
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
  }
 const changeFn = (editorRef: IDomEditor)=>{
     setHtml(editorRef!.getHtml());
     props.getHtmlValue(editorRef!.getHtml())
 }
  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])

  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 100}}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={changeFn }
          mode="default"
          style={{ height: '500px', 'overflowY': 'hidden' }}
        />
      </div>
    </>
  )
}

export default MyEditor
