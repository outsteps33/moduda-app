import { Footer } from "@components/Footer";
import { MobileFooter } from "@components/MobileFooter";
import { Nav } from "@components/nav";
import ReviewComponent from "@components/ReviewComponent";
import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import Banner from '../images/examplebanner.png';
import WebExample from '../images/sampleExmaple_web.png';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";
import Example from '../images/sampleExample.png';
import Pagination from "@components/Pagination";
const Search = styled.input`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  padding: 14px 16px;
  

  width: 634px;
  height: 48px;

  background: #FFFFFF;
  border: 1px solid #AEAEAE;
`;

const MSearch = styled.input`
  box-sizing: border-box;


  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;

  width: 316px;

  border: 0.5px solid #AEAEAE;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;
const Review: NextPage = () =>{
  const items= [{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  },{
    thumb: Example,
    title: '777. 택배기사 구제사례',
    date: '2022.07.21'
  }];

  function Items({ currentItems }: any) {
    return (
      <>
        {currentItems &&
          currentItems.map((item: any, i: number) => (
            <div>
              <div className="px-10 py-3 sm:hidden">
                <Image src={item.thumb} width="100" height="66" layout="responsive" />
                <div>{item.title}</div>
                <div>{item.date}</div>
                <div className="underline">자세히 보기</div>
              </div>
              <Div >
                  <div className=" py-3 hidden sm:block sm:px-2 ">
                    <Image src={Example} width="100" height="66" layout="responsive" />
                    <div>{i}. {item.title}</div>
                    <div>{item.date}</div>
                    <div className="underline">자세히 보기</div>
                  </div>
                </Div>
              </div>
          ))}
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }: any) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState<any>(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <div className="">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={6}
            pageCount={pageCount}
            previousLabel="< previous"
            // renderOnZeroPageCount={null}
          />
        </div>
      </>
    );
  }
  return (
    <div>
      <Nav />
      <div className="sm:hidden">
        <div className="pt-20 mb-10">
          <Image src={Banner} width="100%" height="30px" layout="responsive" />
        </div>
        <div className="grid justify-center mb-[29px] mt-[22px]">

          <MSearch placeholder="검색어를 입력해주세요." />
        </div>
        {[0,0,0].map((v) => (
          <ReviewComponent />

        ))}
        <Pagination />
      </div>

      <div className="hidden sm:block">
        <div className="pt-32  mb-10 px-20">
          <Image src={WebExample} width="100%" height="23" layout="responsive" />
        </div>
        <div className="grid justify-center mb-[60px] mt-[70px]">

          <Search placeholder="검색어를 입력해주세요." />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 px-24 md:px-32">
          {[0,0,0,0,0,0,0,0,0].map((v) => (
            <ReviewComponent />

          ))}
        </div>
        <Pagination />
          {/* <PaginatedItems itemsPerPage={5} /> */}
        
      </div>

      <div className="pb-20"></div>
      <Footer />
      <MobileFooter />
    </div>
  )
}

export default Review;