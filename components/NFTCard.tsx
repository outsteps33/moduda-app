import { FC } from 'react'
import { useTimer } from 'react-timer-hook';

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  author: string;
  description: string;
  url: string;
  price: string;
}



export const NFTCard:FC<ProjectCardProps> = ({title, thumbnail,author, url, description, price}) => {
  

  return (
    <a href={url}> 
      <div style={{backgroundImage: `url(${thumbnail})`, height:'350px', backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}></div>
      <div className="mt-2"><span className="p-1 px-2 rounded-md" style={{ fontSize:'14px', color:'white', backgroundColor:"#19ce60", fontWeight:400}}>NEW</span></div>
      <div className="font-semibold lg:text-lg mt-1">{title} </div>
      <div><span className="italic lg:text-sm font-medium">by {author}</span></div>
      <div>{description}</div>
      <div className="mt-1" style={{height:'0.1px', backgroundColor:'gray'}}></div>
      <div className="lg:text-md mt-1 font-semibold">{price} ~</div>
    </a>
  )

}