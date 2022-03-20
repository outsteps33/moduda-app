import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';



async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
    
    const keyword = await client.keyword.findMany({ take: 10 });
    console.log(keyword)
    res.json({ ok: true, keyword});
  
}

export default withHandler({
  methods: ["GET"], 
  handler, 
  isPrivate: false
});

