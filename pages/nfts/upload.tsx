import { Nft } from ".prisma/client";
import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'; 

interface UploadNFTForm {
  image: FileList;
  blockchain: string;
  author: string;
  price: string;
  description: string;
}

interface UploadNFTMutation {
  ok: boolean;
  nfts: Nft
}



const Upload: NextPage = () => {
  const { user } = useUser();
  const [ imagePriview , setImagePreview ] = useState('');
  const { register, handleSubmit, watch } = useForm<UploadNFTForm>();
  const router = useRouter();
  const image = watch("image");
  const [ uploadNFT , { loading, data}] = useMutation<UploadNFTMutation>("/api/nfts/upload");
  const onValid = async({ blockchain, author , price, description, image}: UploadNFTForm ) => {
    if(loading) return ;
    
    if( image && image.length > 0 && user ) {
      const { uploadURL} = await ( await fetch('/api/files')).json();

      const form = new FormData();
      form.append("file", image[0], user?.id + "");
      const {result: id} = await (await fetch(uploadURL, {
        method: 'POST',
        body: form
      })).json();
      uploadNFT({
        blockchain,
        author,
        price,
        description,
        imageId: id
      })
    } else {
      uploadNFT({
        blockchain,
        author,
        price,
        description,
        image
      })
    }
    
    
  };
  useEffect(()=> {
    if(image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  },[image]);
  
  useEffect(()=> {
    if( data?.ok) {
      router.push(`nfts/${data.nfts.id}`);
    }
  },[data]);
  
  return (
    <form className="px-4 py-16 max-w-3xl mx-auto" onSubmit={handleSubmit(onValid)}>
      <div>
        <label className="w-full text-gray-600 hover:text-orange-500 hover:border-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 py-6 h-64 rounded-md"> 
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            {...register("image", { required: true })}
            className="hidden" 
            accept="image/*"
            type="file" 
          />
        </label>
      </div>
      <div className="mt-5">
        <label>BlockChain</label>
        <div>
          <input {...register("blockchain", { required: true })} required className="w-full border-gray-300 shadow-sm rounded-md" type="text" placeholder="Etherium" />
        </div>
      </div>
      <div className="mt-5">
        <label>Author</label>
        <div>
          <input {...register("author", { required: true })} required className="w-full border-gray-300 shadow-sm rounded-md" type="text" placeholder="YEOBIJIN" />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="price" className="">Floor Price</label>
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input 
            id="price" 
            {...register("price", { required: true })} 
            className="appearance-none pl-7  w-full px-3 shadow-sm rounded-md py-1 border border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
            type="text" 
            required
            placeholder="0.00" />
          <div className="absolute right-0 pr-3 pointer-events-none flex items-center">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <label>Description</label>
        <textarea {...register("description", { required: true })} required className="w-full border-gray-300 shadow-sm rounded-md" rows={4} />
      </div>
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-5 py-3 text-sm shadow-sm rounded-md">
        {loading ? "Loading..." : "Uploaded product"}</button>
    </form>
  );
};

export default Upload;