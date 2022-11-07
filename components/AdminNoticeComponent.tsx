
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Example from '../images/sampleExample.png';

interface Props {
  id: any
  title: string
  thumbnail: string
  createdAt: any
}
const AdminNoticeComponent: FC<Props> = ({ id, title, thumbnail, createdAt}) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/admin/review/${id}`)} className="cursor-pointer">
      
      <div className="px-10 py-3 sm:hidden">
        <div className="relative">
          <div className="absolute top-[10px] left-[10px] z-30 w-fit px-2 py-1 bg-blue-500 text-white">공지사항</div>
          {thumbnail && <Image src={thumbnail} width="100" height="66" layout="responsive" unoptimized={true}/> }
        </div>
        <div>{title}</div>
        <div className="underline">자세히 보기</div>
      </div>
      <div className=" py-3 hidden sm:block sm:px-2 ">
        <div className="relative">
          <div className="absolute top-[10px] left-[10px] z-30 w-fit px-2 py-1 bg-blue-500 text-white">공지사항</div>
          {thumbnail && <Image src={thumbnail} width="100" height="66" layout="responsive" unoptimized={true}/> }
        </div>
        <div>{title}</div>
        <div>{new Date(createdAt).getFullYear()}.{new Date(createdAt).getMonth()}.{new Date(createdAt).getDate()}</div>
        <div className="underline">자세히 보기</div>
      </div>
    </div>
  )
}

export default AdminNoticeComponent;