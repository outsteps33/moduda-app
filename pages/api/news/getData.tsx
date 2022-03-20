import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';



async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
    
    const news = await client.news.findMany({ take : 7 });
    res.json({ ok: true, news});
  
}

export default withHandler({
  methods: ["GET"], 
  handler, 
  isPrivate: false
});

// export default withHandler("POST", handler); 