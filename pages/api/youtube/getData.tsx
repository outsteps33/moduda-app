import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';



async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
    
    const youtube = await client.youtube.findMany({ take : 8});
    res.json({ ok: true, youtube});
  
}

export default withHandler({
  methods: ["GET"], 
  handler, 
  isPrivate: false
});

// export default withHandler("POST", handler); 