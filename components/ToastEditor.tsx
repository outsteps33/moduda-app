
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor, Viewer } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { createRef, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from '@libs/client/useMutation';
import { classNames } from 'pages/intro';

interface IForm {
  title: string;
  content: string;
  thumbnail: FileList;
  notice: boolean;
}

const ToastEditor = () => {
  const [ loadings, setLoadings] = useState(false);
  const [ReviewUpload, { loading, data, error }] = useMutation("/api/reviewUpload");
  const editorRef = createRef<Editor>();
  const [ submit , setSubmit ]= useState('');
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<IForm>();

  function handleChange() {
    const md = editorRef?.current
      ? editorRef?.current.getInstance().getMarkdown()
      : "";
    
  }

  const onSubmit = async () => {
    // setLoadings(true);
    const { title, thumbnail, notice } = getValues();
    if( !(title  && thumbnail)) {
      alert('제목 / 썸네일은 필수입니다.');
      return;
    } 
    const actualFile = thumbnail[0];
    const formBody = new FormData();
    formBody.append("file", actualFile);
    const { id, uploadURL } = await (await fetch(`/api/files`)).json();
      const response = await (await fetch(uploadURL, {
        method: "POST",
        body: formBody,
      })).json();
      
    const editorInstance = editorRef.current?.getInstance();
    
    // editorRef.current?.getInstance().removeHook("addImageBlobHook");
    // editorRef.current?.getInstance()
    //     .addHook("addImageBlobHook", (blob: any, callback: any) => {
    //       (async () => {
    //         let formData = new FormData();
    //         formData.append("file", blob);
    //         console.log(blob)
    //       })();

    //     })

    console.log("1")
    const getContent_md = editorInstance?.getHTML();
    console.log(getContent_md);
    // if(getContent_md) {

    //   setHtml(getContent_md);
    //   createBlogMutation({
    //     variables: {
    //       title,
    //       content:getContent_md,
    //       thumbnail: url
    //     }
    //   });
    // }

     ReviewUpload({
      title,
      thumbnail: response.result.variants[0],
      contents: getContent_md,
      notice
    });
    // setLoadings(false);
    // alert('제출되었습니다.');
    setTimeout(() => {
      window.location.reload();
      alert('제출되었습니다.')
    }, 3000);
    }

    const inValid = () => {
      console.log(errors)
    }
  

    const uploadImage = async (blob: any) => {
      const formBody = new FormData();
      formBody.append('file', blob);
      const { id, uploadURL } = await (await fetch(`/api/files`)).json();
      const response = await (await fetch(uploadURL, {
        method: "POST",
        body: formBody,
      })).json();
      // const response = await (await fetch( '/api/files', {
      //     method: "POST",
      //     body: formBody
      //   })).json();
      console.log(response.result.variants[0])
      return response.result.variants[0]
    };

  return (
    <div>
      <form className="my-5" onSubmit={handleSubmit(onSubmit, inValid)}>
          <div className=" mx-auto">
          <div className="mt-5 text-lg"> 제목</div>
            <input 
              {...register("title", {
                required: "제목을 입력해주세요. ",
                // validate: (author) => author.includes("gmail.com")
              })}
              type="title" 
              name="title" 
              required 
              className="w-full mx-auto border-2 border-gray-300 mt-3 py-2 px-2 rounded-md text-base text-gray-900"
              placeholder="제목을 입력해주세요." 
            />
          </div>
          <div className=" mx-auto">
          <div className="mt-5 text-lg"> 공지사항 여부</div>
            <input 
              {...register("notice", {
                required: "공지사항 duqn 입력해주세요. ",
                // validate: (author) => author.includes("gmail.com")
              })}
              type="checkbox" 
              name="notice" 
              required 
              className="w-fit ring-0 mx-auto border-2 border-gray-300 mt-3 py-2 px-2 rounded-md text-base text-gray-900"
              placeholder="제목을 입력해주세요." 
            />
          </div>
          <div className="mx-auto mb-5">
            <div className="mt-5 text-lg">썸네일 업로드</div>
            <input 
              {...register("thumbnail", {
                required: "플랫폼 입력해주세요",
                // validate: (platform) => platform.includes("gmail.com")
              })}
              type="file" 
              name="thumbnail" 
              accept="image/*"
              required 
              className="w-full mx-auto border-2 border-gray-300  py-2 px-2 rounded-md text-base text-gray-900"
              placeholder="썸네일 업로드" 
            />
          </div>
        </form>
        <Editor
          previewStyle="vertical"
          height="650px"
          language="ko"
          initialEditType="markdown"
          initialValue="hello"
          ref={editorRef}
          plugins= {[colorSyntax ]}
          hooks={{
            addImageBlobHook: async (blob, callback) => {
              const upload = await uploadImage(blob);
              callback(upload, "image");
              return false;
            }
          }}
          
        />
      <button 
        onClick={() => onSubmit()}
        className="border mb-[200px] mt-20 w-1/12 mx-auto text-white bg-green-500 px-5 py-3 text-xl text-center"
      >제출</button>
      <div>{loadings ? '제출중이니 조금만 기다려주세요' : '' }</div>
      {submit}
    </div>
  )
}

export default ToastEditor;