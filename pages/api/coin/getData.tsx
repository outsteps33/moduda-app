import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';



async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
    
  const coin = await client.coin.findMany({ take: 5});
  res.json({ ok: true, coin});

}

export default withHandler({
  methods: ["GET"], 
  handler, 
  isPrivate: false
});

