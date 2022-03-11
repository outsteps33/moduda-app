import { FC } from 'react'
import { useTimer } from 'react-timer-hook';

interface ProjectCardProps {
  title: string;
  endDate: Date;
  thumbnail: string;
  url: string;
}



export const NFT_ProjectCard:FC<ProjectCardProps> = ({title, endDate, thumbnail, url}) => {
  function MyTimer({ expiryTimestamp }: any) {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
  
    return (
      <div className=" mt-2" >
        <span className="p-1 px-2 rounded-md " style={{ fontSize:'14px', color:'white', backgroundColor:"#4772f6", fontWeight:400}}>FREE</span>
        <span className="py-1 px-2 ml-2 rounded-md " style={{ fontSize:'14px', color:'black', backgroundColor:"#edeff4", fontWeight:600}}>{days}일 {hours}시간 {minutes}분 {seconds}초 남음</span>
      </div>
    );
  }

  return (
    <div>
      <div style={{backgroundImage: `url(${thumbnail})`, height:'350px', backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}></div>
      <MyTimer expiryTimestamp={endDate} />
      <div className="font-semibold lg:text-lg mt-1">{title}</div>
    </div>
  )

}