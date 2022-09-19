import { MobileFooter } from "@components/MobileFooter";
import { Nav } from "@components/nav";
import { NextPage } from "next";




const Apply: NextPage = () => {
  return (
    <div >
      <Nav />
      <div className="px-5">
        <div className="pt-28 text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl">무료 구제 성공 가능성 진단</div>
        <div className="text-sm">
          <div className="">안녕하세요. 모두다행정사입니다.</div>
          <div>구제 성공 가능성 진단을 위해 오른쪽 양식을 작성해주세요.</div>
          <div>작성된 양식을 통해 구제 가능성 검토가 진행됩니다.</div>
          <div>확실한 진단을 위해 진실된 내용을 꼼꼼히 작성 부탁드립니다.</div>
          <div>모두다행정사가 구제하는 것은 의뢰인의 '간절함'입니다.</div>
          <div>꼭 도움이 되어 드리겠습니다.</div>
        </div>

      </div>
      <MobileFooter />
    </div>
  )
}

export default Apply;