import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';



async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
    
  const allRanking = await axios.get('https://reallive-check-backend.herokuapp.com/contents/getAllRanking');
  res.json({ ok: true, allRanking});

}

export default withHandler({
  methods: ["GET"], 
  handler, 
  isPrivate: false
});

