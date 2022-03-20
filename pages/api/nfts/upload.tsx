import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';




async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  if(req.method === 'GET') {
    // const nfts = await client.nft.findMany({});

    // res.json({ ok: true,  nfts: nfts});
  } 

  if(req.method === 'POST') {
    const { body: { blockchain, author, price, description, imageId }, session: { user }} = req;
    
    let newAuthor ;
    // const existAuthor = await client.author.findUnique({ where: { name : author }});
    
    // const existUser = await client.user.findUnique({ where: { id: user?.id}});
    // if(existUser?.role !== 'admin')  return res.status(400).json({ok: false});
    // if(!existAuthor) {
    //   newAuthor = await client.author.create({
    //     data: {
    //       name: author,
    //       thumbnail: '',
    //       description: ''
    //     }
    //   })
    // }
    if(!user) return res.status(400).json({ok: false})
  
    //NFT 정보 넣는 코드
    // const nfts = await client.nft.create({
    //   data: {
    //     blockChain: blockchain,
    //     author,
    //     price,
    //     description,
    //     image: imageId
    //     author: {
    //       connect: {
    //         id: existAuthor ? existAuthor.id :  newAuthor?.id
    //       }
    //     }
    //   }
    // })
    console.log("ok", blockchain, )
  
    res.json({ ok: true,  nfts: "nft"})

  }
}

export default withHandler({
  methods: [ "POST"], 
  handler, 
  isPrivate: true
});

// export default withHandler("POST", handler); 