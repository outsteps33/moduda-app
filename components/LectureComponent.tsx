
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Example from '../images/sampleExample.png';

interface Props {
  id: any
  title: string
  thumbnail: string
}
const LectureComponent: FC<Props> = ({ id, title, thumbnail}) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/lecture/${id}`)}>
      <div className="px-10 py-3 sm:hidden">
        <Image src={thumbnail} width="100" height="66" layout="responsive" unoptimized={true}/>
        <div>{title}</div>
        <div className="underline">자세히 보기</div>
      </div>
      <div className=" py-3 hidden sm:block sm:px-2 ">
        <Image src={thumbnail} width="100" height="66" layout="responsive"unoptimized={true} />
        <div>{title}</div>
        <div className="underline">자세히 보기</div>
      </div>
    </div>
  )
}

export default LectureComponent;