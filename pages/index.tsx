import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import Image from 'next/image';
import {Nav} from '../components/nav';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from 'styled-components';
import { NFT_ProjectCard } from '../components/ProjectCard';
import { MoreButton } from '../components/MoreButton';
import { Author } from '../components/Author';
import { NFTCard } from '../components/NFTCard';
import Gold from '../images/금메달.png'
import Silver from '../images/은메달.png'
import Bronze from '../images/동메달.png'
import useUser from '@libs/client/useUser';
import useSWR from 'swr';
import { Nft } from '.prisma/client';

const SlickDiv = styled.div`

  @media screen and (min-width: 700px) {
    width: calc(100vw - 150px);
  } 

  @media screen and (min-width: 900px) {
    width: calc(100vw - 500px);
  } 
`;


const FreeProject =[
  {
    title: 'The Sun',
    endDate: new Date('2022-03-01'),
    thumbnail: 'https://nft-content.upbit.com/a1259566-eb81-4710-9dc2-b2ab8dfacf5f'
  },
  {
    title: 'The Sun',
    endDate: new Date('2022-03-01'),
    thumbnail: 'https://nft-content.upbit.com/116000f4-1fef-4f11-834f-a0aa3d513e4c'
  },
  {
    title: 'The Sun',
    endDate: new Date('2022-03-01'),
    thumbnail: 'https://nft-content.upbit.com/c34a3478-e462-4d3a-9bba-160ae7210bd1'
  },
  {
    title: 'The Sun',
    endDate: new Date('2022-03-01'),
    thumbnail: 'https://nft-content.upbit.com/a1259566-eb81-4710-9dc2-b2ab8dfacf5f'
  }

]

interface NftsResponse {
  ok: boolean;
  nfts: Nft[]
}
const Home: NextPage = () => {
  const router= useRouter();
  const { user, isLoading} = useUser();
  const { data } = useSWR<NftsResponse>("/api/nfts/upload");


  return (
    <div className="mx-auto">
      <Nav />
      <Carousel autoPlay className="" showIndicators={false} showThumbs={false} showStatus={false}>
        <div style={{height:"55vw"}}>
          <img alt="" src={'https://nft-content.upbit.com/a1259566-eb81-4710-9dc2-b2ab8dfacf5f'}/>
        </div>
        <div style={{height:"55vw"}}>
          <img alt="" src={'https://nft-content.upbit.com/b1dee356-b5c9-400e-8296-82ef058d43dd'} />
        </div>
        <div style={{height:"55vw"}}>
          <img alt="" src={'https://nft-content.upbit.com/116000f4-1fef-4f11-834f-a0aa3d513e4c'}/>
        </div>
        <div style={{height:"55vw"}}>
          <img alt="" src={'https://nft-content.upbit.com/c34a3478-e462-4d3a-9bba-160ae7210bd1'} />
        </div>
        <div style={{height:"55vw"}}>
          <img alt="" src={'https://nft-content.upbit.com/a1259566-eb81-4710-9dc2-b2ab8dfacf5f'} />
        </div>
        
      </Carousel>
      <SlickDiv className="mx-auto">
        <div className="mt-20 flex justify-center items-center" style={{backgroundColor:'rgba(237,239,244,.4)', height:'200px'}}>
          <div className="text-center">
            <div className="font-bold text-black lg:text-2xl">Dive Into NFT Market Here</div>
            <div className="" style={{fontSize: '20px'}}>NFT에 관한 모든 정보를 NFT가이드에서 얻어가세요.</div>
          </div>
        </div>

        <div className="pt-28" id="freeNFT">
          <div className="font-bold text-black lg:text-4xl text-center">FREE NFT EVENT</div>
          <div className="text-black lg:text-xl text-center">무료로 NFT를 받아가세요.</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-20" >
            <NFT_ProjectCard title={FreeProject[0].title} thumbnail={FreeProject[0].thumbnail} url={'https://upbit.com/nft'} endDate={FreeProject[0].endDate}  />
            <NFT_ProjectCard title={FreeProject[1].title} thumbnail={FreeProject[1].thumbnail} url={'https://upbit.com/nft'} endDate={FreeProject[1].endDate}  />
            <NFT_ProjectCard title={FreeProject[2].title} thumbnail={FreeProject[2].thumbnail} url={'https://upbit.com/nft'} endDate={FreeProject[2].endDate}  />
            {/* <NFT_ProjectCard title={FreeProject[0].title} thumbnail={FreeProject[0].thumbnail} url={'https://upbit.com/nft'} endDate={FreeProject[0].endDate}  /> */}
          </div>
          <MoreButton title={'더보기'} url={'/freeNFT'} />

        </div>
        <div className="pt-28 mt-10" id="artists">
          <div className="font-bold text-black lg:text-4xl text-center">NFT ARTISTS</div>
          <div className="text-black lg:text-xl text-center mb-16">매주 새로운 NFT 작가를 소개해드립니다.</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-28">
            <Author image={'https://nft-content.upbit.com/a1259566-eb81-4710-9dc2-b2ab8dfacf5f'} author={'YEOBIJIN'} marketPlace={''} description={'This Artist makes NFT for sports. His art is being sold in opensea.'} />
            <Author image={'https://nft-content.upbit.com/a1259566-eb81-4710-9dc2-b2ab8dfacf5f'} author={'YEOBIJIN'} marketPlace={''} description={'This Artist makes NFT for sports. His art is being sold in opensea.'} />
            <Author image={'https://nft-content.upbit.com/a1259566-eb81-4710-9dc2-b2ab8dfacf5f'} author={'YEOBIJIN'} marketPlace={''} description={'This Artist makes NFT for sports. His art is being sold in opensea.'} />
            <Author image={'https://nft-content.upbit.com/a1259566-eb81-4710-9dc2-b2ab8dfacf5f'} author={'YEOBIJIN'} marketPlace={''} description={'This Artist makes NFT for sports. His art is being sold in opensea.'} />
          </div>
          <MoreButton title={'더보기'} url={'/artists'} />
        </div>
        {/* <NFT_mainnoti /> */}
        {/* <NFT_carousel /> */}
        
        {/* 3x2 */}
        {/* <NFT_free /> */}
        
        {/* <NFT_Grid2Card /> */}

        {/* <NFT_slick title={'무료 NFT 사이트'} />
        <NFT_slick title={'화제의 NFT'} />
        <NFT_slick title={'신규 NFT'} />
        <NFT_author title={'NFT 작가'} /> */}
        {/* NFT 뉴스/정보 */}
        <div className="mt-32 flex justify-center items-center" style={{backgroundColor:'rgba(237,239,244,.4)', height:'250px'}}>
          <div className="text-center">
            <div className="font-bold text-black lg:text-2xl">Brag Your NFT Here</div>
            <div className="" style={{fontSize: '20px'}}>나의 NFT를 자랑하고 선물을 얻어가세요.</div>
            <button className=" mt-5 text-md font-semibold border border-black px-4 py-2" onClick={() => router.push('/bragNFT')}>자랑하러 가기</button>
          </div>
        </div>

        <div className="pt-28 mt-10" id="newNFT">
          <div className="font-bold text-black lg:text-4xl text-center">신규 NFT</div>
          <div className="text-black lg:text-xl text-center mb-16">적은 금액으로 새로운 NFT에 투자하세요.</div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20" >
            <NFTCard title={FreeProject[0].title} thumbnail={FreeProject[0].thumbnail} url={'https://upbit.com/nft'} author={'YEOBIJIN'} description={'새로운 NFT에 대한 간략한 설명'} price={'KRW 20,000'}  />
            <NFTCard title={FreeProject[1].title} thumbnail={FreeProject[1].thumbnail} url={'https://upbit.com/nft'} author={'YEOBIJIN'} description={'새로운 NFT에 대한 간략한 설명'} price={'KRW 20,000'}  />
            <NFTCard title={FreeProject[0].title} thumbnail={FreeProject[0].thumbnail} url={'https://upbit.com/nft'} author={'YEOBIJIN'} description={'새로운 NFT에 대한 간략한 설명'} price={'KRW 20,000'}  />
            <NFTCard title={FreeProject[2].title} thumbnail={FreeProject[2].thumbnail} url={'https://upbit.com/nft'} author={'YEOBIJIN'} description={'새로운 NFT에 대한 간략한 설명'} price={'KRW 20,000'}  />
            <NFTCard title={FreeProject[0].title} thumbnail={FreeProject[0].thumbnail} url={'https://upbit.com/nft'} author={'YEOBIJIN'} description={'새로운 NFT에 대한 간략한 설명'} price={'KRW 20,000'}  />
            <NFTCard title={FreeProject[1].title} thumbnail={FreeProject[1].thumbnail} url={'https://upbit.com/nft'} author={'YEOBIJIN'} description={'새로운 NFT에 대한 간략한 설명'} price={'KRW 20,000'}  />
            <NFTCard title={FreeProject[0].title} thumbnail={FreeProject[0].thumbnail} url={'https://upbit.com/nft'} author={'YEOBIJIN'} description={'새로운 NFT에 대한 간략한 설명'} price={'KRW 20,000'}  />
            <NFTCard title={FreeProject[2].title} thumbnail={FreeProject[2].thumbnail} url={'https://upbit.com/nft'} author={'YEOBIJIN'} description={'새로운 NFT에 대한 간략한 설명'} price={'KRW 20,000'}  />
          </div>
          <MoreButton title={'더보기'} url={'/newNFT'} />
        </div>

        <div className="pt-28 mt-32" id="ranking">
          <div className="font-bold text-black lg:text-4xl text-center">지난 주 NFT 랭킹</div>
          <div className="text-black lg:text-xl text-center mb-16">내 NFT 자랑하고 상품획득하세요.</div>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-12" >
            <div className="mt-10">
              <Image src={Silver} className="mx-auto "  alt="" />
              <NFTCard title={FreeProject[0].title} thumbnail={FreeProject[0].thumbnail} url={'https://upbit.com/nft'} author={'YEOBIJIN'} description={'새로운 NFT에 대한 간략한 설명'} price={'KRW 20,000'}  />
            </div>
            <div className="">
              <Image src={Gold} className="mx-auto "  />
              <NFTCard title={FreeProject[1].title} thumbnail={FreeProject[1].thumbnail} url={'https://upbit.com/nft'} author={'YEOBIJIN'} description={'새로운 NFT에 대한 간략한 설명'} price={'KRW 20,000'}  />
            </div>
            <div className="mt-16">
              <Image src={Bronze} className="mx-auto "  />
              <NFTCard title={FreeProject[0].title} thumbnail={FreeProject[0].thumbnail} url={'https://upbit.com/nft'} author={'YEOBIJIN'} description={'새로운 NFT에 대한 간략한 설명'} price={'KRW 20,000'}  />
            </div>

          </div>
          <MoreButton title={'금메달 도전하기'}  url={'/ranking'} />
        </div>
        {/* <NFT_news /> */}
      </SlickDiv>
    </div>
  )
}

export default Home
