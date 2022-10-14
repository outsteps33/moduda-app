
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor, Viewer } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { createRef, useCallback, useState } from 'react';

const ToastEditor = () => {
  const editorRef = createRef<Editor>();
  const [ submit , setSubmit ]= useState('');
  function handleChange() {
    const md = editorRef?.current
      ? editorRef?.current.getInstance().getMarkdown()
      : "";
    
  }

  const Submit = useCallback(() => {

  },[]);
  
  return (
    <div>
      <Editor
        // previewStyle="vertical"
        height="650px"
        language="ko"
        onChange={handleChange}
        initialEditType="markdown"
        initialValue="hello"
        ref={editorRef}
        plugins= {[colorSyntax ]}
      />
      <div onClick={() => setSubmit(editorRef.current ? editorRef.current?.getInstance().getHTML() : '')}>제출</div>
      {submit}
    </div>
  )
}

export default ToastEditor;