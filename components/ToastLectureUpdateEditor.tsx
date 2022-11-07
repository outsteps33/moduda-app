
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor, Viewer } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { createRef, FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Back from '@images/blog/arrow_back.png';
import useMutation from '@libs/client/useMutation';

interface IForm {
  title: string;
  content: string;
  thumbnail: FileList;
}

interface Props {
  id: any;
  previousTitle: any;
  previousthumb: any;
  contents: any;
}

const ToastUpdateEditor:FC<Props> = ({ id, previousTitle, previousthumb, contents }) => {
  const editorRef = createRef<Editor>();
  const router = useRouter();
  const [ReviewUpload, { loading, data, error }] = useMutation("/api/editLecture");
  const { register, getValues, setValue, handleSubmit, formState: { errors } } = useForm<IForm>();
  
  useEffect(() => {
    editorRef.current?.getInstance().setHTML(contents);
    setValue('title', previousTitle);
  }, []);

  const onSubmit = async () => {
    if(loading) {
      return;
    }
    const { title, thumbnail } = getValues();
    console.log(thumbnail)
    if( !(title && thumbnail)) {
      alert('제목 / 썸네일은 필수입니다.');
      return;
    } 

    let response;
    
    if(thumbnail.length > 0) {
      const actualFile = thumbnail[0];
      const formBody = new FormData();
      formBody.append("file", actualFile);
      const { id, uploadURL } = await (await fetch(`/api/files`)).json();
        response = await (await fetch(uploadURL, {
          method: "POST",
          body: formBody,
        })).json();
        
    }
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
    // const getContent_md = editorInstance?.getMarkdown()
    console.log(getContent_md);
    
    ReviewUpload({
      id,
      title,
      thumbnail: response ? response.result.variants[0] :  previousthumb,
      content: getContent_md,
    });
  }

  useEffect(() => {
    if (data?.ok) {
      alert('블로그가 업데이트 되었습니다.');
      router.push(`/lecture`)
    }
  }, [data, router]);

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

    console.log(response.result.variants[0])
    return response.result.variants[0]
  };
  return (
    <div className="">
      <div className="mt-[120px] mx-auto w-[1180px] ">
        <div className="">
          <div onClick={() => router.push(`/developer/${router.query.developerId}`)}>
            <Image src={Back} width={72} height={72} layout="fixed" />
          </div>
        </div>
        <div className="flex flex-col justify-center w-[900px] mx-auto" onSubmit={handleSubmit(onSubmit, inValid)}>
          <div className="mt-[42px]">
          <div className="mt-5 text-lg"> 제목</div>
            <div>
              <input 
                {...register("title", {
                  required: "제목을 입력해주세요.",
                })}
                type="text"
                // value={previousTitle}
                className="bg-[#E2E3E7] rounded-[10px] w-full h-[70px] mt-[12px] px-[20px]"
                placeholder="글 제목을 입력해주세요."
              />
            </div>
          </div>
          <div className="mt-[24px]">
            <div className="mt-5 text-lg"> 썸네일 첨부 * </div>
            <div>
              <Image src={previousthumb} width={'150'} height={'100'} layout="fixed" />
            </div>
            <div className="flex items-center ">
              <div className="w-full ">
                <input 
                  {...register("thumbnail", {
                    required: "썸네일 입력해주세요",
                    // validate: (platform) => platform.includes("gmail.com")
                  })}
                  type="file" 
                  name="thumbnail" 
                  accept="image/*"
                  // value={thumbanil}
                  className="bg-[#E2E3E7]  rounded-[10px] w-full h-[70px] mt-[12px] px-[20px] pt-[20px]"
                  placeholder="썸네일 첨부"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1180px] mx-auto mt-[40px]">
        <Editor
          previewStyle="vertical"
          height="595px"
          language="ko"
          initialEditType="wysiwyg"
          // initialValue={contents}
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
      </div>
      <div className="flex justify-center items-center gap-[12px] my-[40px]">
        <div className="bg-white border-[#3F3F3F] border text-white w-[207px] h-[55px] flex items-center justify-center rounded-[60px] ">
          <div  onClick={() =>onSubmit}>포스트 발행</div>
        </div>
      </div>
    </div>
  )
}

export default ToastUpdateEditor;