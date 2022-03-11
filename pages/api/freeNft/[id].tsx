import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';




async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  

  const { id } = req.query;
  const freeNFTProject = await client.freeNFTProject.findUnique({
    where: {
      id: +id.toString()
    },
    // include: {
    //   user: {
    //     select: {
    //       id: true, name: true
    //     }
    //   },

    // }
  })
  res.json({ ok: true, freeNFTProject })
}

export default withHandler({
  methods: ["GET"], 
  handler, 
  isPrivate: true
});

// export default withHandler("POST", handler); 