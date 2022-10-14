
import Image from 'next/image';
import Example from '../images/Cider.png';


const CiderComponent = () => {
  return (
    <div>
      <div className="px-10 py-3 sm:hidden">
        <Image src={Example} width="100" height="66" layout="responsive" />
        <div>777. 핵심 강의 </div>
        <div>2022.07.21</div>
        <div className="underline">자세히 보기</div>
      </div>
      <div className=" py-3 hidden sm:block sm:px-2 ">
        <Image src={Example} width="100" height="66" layout="responsive" />
        <div>777. 핵심 강의 </div>
        <div>2022.07.21</div>
        <div className="underline">자세히 보기</div>
      </div>
    </div>
  )
}

export default CiderComponent;