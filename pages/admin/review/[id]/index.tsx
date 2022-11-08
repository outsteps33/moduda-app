import { Footer } from "@components/Footer";
import { MobileFooter } from "@components/MobileFooter";
import { Nav } from "@components/nav";
import useMutation from "@libs/client/useMutation";
import { NextPage } from "next";
import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react";
import useSWR from "swr";

interface ContentProps {
  content: any
}

interface ReviewResponse {
  ok: boolean;
  review: any;
}

const Review: NextPage = () => {
  const router = useRouter();
  const [ isDelete, setIsDelete ] = useState(false);
  const { data, mutate: boundMutate } = useSWR<ReviewResponse>(
    `/api/getOneReview?id=${router.query.id}`
);

const [DeleteReview, { loading, data: deleteReview, error }] = useMutation("/api/deleteReview");

const Delete = () => {
  if(loading){
    return;
  }
  DeleteReview({
    id: router.query.id
  });

}

useEffect(() => {
  if(deleteReview?.ok) {
    alert('삭제되었습니다.');
    router.push(`/admin/review`);
  };
},[ deleteReview, router])

  return (
    <div>
      <Nav />
      {isDelete &&
        <div className="absolute w-screen h-screen flex justify-center items-center z-50 bg-gray-100 ">
          <div className="bg-white w-[500px] h-[500px] border flex justify-center items-center opacity-100">
            <div>
              <div className="text-center pb-12 text-[20px] font-normal">정말 삭제하시겠습니까?</div>
              <div className="flex justify-around gap-[30px]">
                <div className="bg-green-500 rounded-lg text-white px-5 py-2 cursor-pointer " onClick={() =>setIsDelete(false)}>아니요</div>
                <div className="bg-red-500 rounded-lg text-white px-5 py-2 cursor-pointer " onClick={() => Delete()}>예,삭제합니다.</div>
              </div>
            </div>
          </div>
          
        </div>
      }
      <div className="pt-[150px]"></div>
      <div className="flex gap-[50px] justify-center mb-[30px]">
        <div className="ring ring-5 ring-gray-300 rounded-full px-4 cursor-pointer hover:bg-green-500 " onClick={() => router.push(`/admin/review/${router.query.id}/edit`)}>수정</div>

        <div className="ring ring-5 ring-gray-300 rounded-full px-4 cursor-pointer hover:bg-green-500 " onClick={() => setIsDelete(true)} >삭제</div>
      </div>
      <div className="grid justify-center">
        <div className="text-black flex justify-center text-3xl mb-20">{data?.review.title}</div>
        <div className="" dangerouslySetInnerHTML={{__html: data?.review.contents}} />
      </div>
      <Footer />
      <MobileFooter />
    </div>
  )
}


export default Review