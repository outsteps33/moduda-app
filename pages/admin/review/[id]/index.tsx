import { Footer } from "@components/Footer";
import { MobileFooter } from "@components/MobileFooter";
import { Nav } from "@components/nav";
import { NextPage } from "next";
import { useRouter } from "next/router"
import { FC } from "react";
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
  const { data, mutate: boundMutate } = useSWR<ReviewResponse>(
    `/api/getOneReview?id=${router.query.id}`
);
  return (
    <div>
      <Nav />
      <div className="pt-[150px]"></div>
      <div className="flex gap-[50px] justify-center mb-[30px]">
        <div className="ring ring-5 ring-gray-300 rounded-full px-4 " onClick={() => router.push(`/admin/review/${router.query.id}/edit`)}>수정</div>
        <div className="ring ring-5 ring-gray-300 rounded-full px-4 ">삭제</div>
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