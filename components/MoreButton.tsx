import { useRouter } from "next/router"


interface MorebuttonProps {
  url: string;
  title: string;
}

export const MoreButton: React.FC<MorebuttonProps> = ({url, title}) =>{
  const router = useRouter();
  return (
    <div onClick={() => router.push(url)} className="grid justify-center mt-20">
      <span 
        className="border border-black rounded-sm bg-white px-28 py-4 text-xl font-semibold text-center cursor-pointer "
      >
        {title}
      </span>
    </div>
  )
}