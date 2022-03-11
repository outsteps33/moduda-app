import { FreeNFTProject, User } from ".prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from 'swr';

interface FreeNFTWithUser extends FreeNFTProject {
  user: User;
}

interface FreeNFTResponse {
  ok: boolean;
  freeNFTProject: FreeNFTProject
  // freeNFTProject: FreeNFTWithUser
}

const FreeNFTProject: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR<FreeNFTResponse>(router.query.id ? `/api/freeNft/${router.query.id}`: null);

  return (
    <div>
      {data?.freeNFTProject?.title}
    </div>
  )
}