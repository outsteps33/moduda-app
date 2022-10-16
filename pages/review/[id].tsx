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