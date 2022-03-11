import { FC } from 'react';

interface AuthorProps {
  image: string;
  author: string;
  marketPlace: string;
  description: string;

}
export const Author:FC<AuthorProps> = ({image, author, marketPlace, description}) => {
  return (
    <div className="text-center outline-none cursor-pointer "  >
      <img src={image} className="grid justify-center rounded-full mx-auto" style={{width:'200px', height:'200px'}}  />
    <div>
      <div className="mt-2 text-lg">{author}</div>
      <div className="text-gray-500">{description.length > 100 ? <>{description.substring(0,100) + '...'}</> : <>{description}</>}</div>
      <div className="mt-4"><a href={marketPlace} target="_blank" className="text-white bg-blue-500 rounded-md px-3 py-2 ">View MarketPlace</a></div>
    </div>
  </div>
  )
}