import { Footer } from "@components/Footer";
import { MobileFooter } from "@components/MobileFooter";
import { Nav } from "@components/nav";
import ReviewComponent from "@components/ReviewComponent";
import { NextPage } from "next";
import Image from "next/image";
import Banner from '../images/examplebanner.png';
import WebExample from '../images/sampleExmaple_web.png';
import WLecture from '../images/lectureBanner.png';
import MLecture from '../images/lectureMBanner.png';

const Lecture: NextPage = () =>{
  return (
    <div>
      <Nav />
      <div className="sm:hidden">
        <div className="pt-20 mb-10">
          <Image src={MLecture} width="100%" height="30px" layout="responsive" />
        </div>
        {[0,0,0].map((v) => (
          <ReviewComponent />

        ))}
      </div>

      <div className="hidden sm:block">
        <div className="pt-32  mb-10 px-20">
          <Image src={WLecture} width="100%" height="23" layout="responsive" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 px-24 md:px-32">
          {[0,0,0,0,0,0,0,0,0].map((v) => (
            <ReviewComponent />

          ))}
        </div>
      </div>

      <div className="pb-20"></div>
      <Footer />
      <MobileFooter />
    </div>
  )
}

export default Lecture;